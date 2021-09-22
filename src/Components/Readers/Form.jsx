import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "../Form/Form";

function Form({ setSearchValue, label, setLoading }) {
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
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
							setSearchValue(event.target.value);
						}, 700);
					}}
				/>
			</form>
		</div>
	);
}

export default Form;
