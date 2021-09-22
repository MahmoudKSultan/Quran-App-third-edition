import React, { lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Table.css";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

export default function FullTable({ data }) {
	const classes = useStyles();
	const Body = lazy(() => import("./Body"));
	// georgean
	const geoMonth = data[0].date.gregorian.month.number;
	let hijMonth = "";
	if (
		data[0].date.hijri.month.ar === data[data.length - 1].date.hijri.month.ar
	) {
		hijMonth = data[0].date.hijri.month.ar;
	} else {
		hijMonth = `${data[0].date.hijri.month.ar} - ${
			data[data.length - 1].date.hijri.month.ar
		}`;
	}
	// higri

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>أيام الأسبوع</TableCell>
						<TableCell className="wrap-border">
							<TableCell className="no-border">
								ميلادي
								<br />
								<span>{geoMonth}</span>
							</TableCell>
							<TableCell className="no-border">
								هجري
								<br />
								<span style={{ fontSize: "10px" }}>{hijMonth}</span>
							</TableCell>
						</TableCell>
						<TableCell>الفجر</TableCell>
						<TableCell>الشروق</TableCell>
						<TableCell>الظهر</TableCell>
						<TableCell>العصر</TableCell>
						<TableCell>المغرب</TableCell>
						<TableCell>العشاء</TableCell>
					</TableRow>
				</TableHead>
				<Suspense fallback={<h3>Loading..</h3>}>
					<Body data={data} />
				</Suspense>
			</Table>
		</TableContainer>
	);
}
