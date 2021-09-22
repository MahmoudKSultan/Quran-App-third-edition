import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	textField: {
		color: "rgba(255, 255, 255, 0.5)",
	},
}));

function Form({ setSearchValue, label }) {
	const { textField } = useStyles();

	return (
		<div className="searchForm">
			<form noValidate autoComplete="off">
				<TextField
					className={textField}
					id="standard-basic"
					label={label}
					color="secondary"
					onChange={(event) => {
						setSearchValue(event.target.value);
					}}
				/>
			</form>
		</div>
	);
}

export default Form;
