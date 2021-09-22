import React from "react";
import "./Pagination.css";
function Pagination({ itemsNumber, itemsPerPage, changePageNumber, page }) {
	const pagination = Math.ceil(itemsNumber / itemsPerPage);
	const array = [...Array(pagination).keys()];
	if (pagination === 1) {
		return null;
	}
	return (
		<div className="pagination">
			<div className="wrapper">
				{array.map((num) => {
					return (
						<span
							key={num}
							onClick={() => changePageNumber(num + 1)}
							className={num + 1 === page ? "active" : ""}
						>
							{num + 1}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default Pagination;
