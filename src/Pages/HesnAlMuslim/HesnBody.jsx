import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ResultMessage from "../../Components/ResultMessage/ResultMessage";

function HesnBody({ athkar }) {
	return (
		<div className="hesn-body">
			<Grid container spacing={5} className="grid">
				{athkar.length === 0 ? (
					<ResultMessage message="لا يوجد نتائج لعملية البحث!" color="red" />
				) : (
					athkar.map(({ ID, Title }) => {
						return (
							<Grid item md={4} sm={6} xs={12} key={ID}>
								<Link to={`/hesn/${ID}/${Title}`} className="grid-box">
									<div className="box-title">
										<h3>{Title}</h3>
									</div>
								</Link>
							</Grid>
						);
					})
				)}
			</Grid>
		</div>
	);
}

export default HesnBody;
