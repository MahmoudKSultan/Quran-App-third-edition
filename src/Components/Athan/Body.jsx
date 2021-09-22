import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function Body({ data }) {
	const toGetDay = new Date();
	return (
		<TableBody>
			{data.map((row, idx) => (
				<TableRow
					key={idx}
					className={
						row.date.gregorian.day == toGetDay.getUTCDate() ? "active" : ""
					}
				>
					<TableCell component="th" scope="row" className="day">
						{row.date.hijri.weekday.ar}
					</TableCell>
					<TableCell className="wrap-border flex">
						<TableCell className="no-border">
							{row.date.gregorian.day}
						</TableCell>
						<TableCell className="no-border">{row.date.hijri.day}</TableCell>
					</TableCell>
					<TableCell>{row.timings.Fajr.slice(0, 5)}</TableCell>
					<TableCell>{row.timings.Sunrise.slice(0, 5)}</TableCell>
					<TableCell>{row.timings.Dhuhr.slice(0, 5)}</TableCell>
					<TableCell>{row.timings.Asr.slice(0, 5)}</TableCell>
					<TableCell>{row.timings.Maghrib.slice(0, 5)}</TableCell>
					<TableCell>{row.timings.Isha.slice(0, 5)}</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
}

export default Body;
