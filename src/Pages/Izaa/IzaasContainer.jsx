import React, { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import paginate from "../../utils/paginate";

import search from "../../utils/search";
import Izaas from "./Izaas";
import Popup from "./../../Components/Popup/Popup";
import Loading from "./../../Components/Loading/Loading";
import Form from "./../../Components/Readers/Form";
import ResultMessage from "../../Components/ResultMessage/ResultMessage";

function IzaasContainer({ radios, playIzaa }) {
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const [loading, setLoading] = useState(false);
	const searchedAthkar = search(radios, searchValue, "name");
	const paginatedAthkar = paginate(searchedAthkar || radios, page, 12);
	const searchedAthkarNum = searchedAthkar.length;
	const changePageNumber = (page) => {
		setPage(page);
	};
	const [data, setData] = useState({ isOpen: false, message: "" });

	return (
		<div className="izaasBox">
			<Form
				setSearchValue={setSearchValue}
				label="ابحث عن إذاعة معينة"
				setLoading={setLoading}
			/>
			{loading ? (
				<Loading />
			) : (
				<>
					{searchedAthkarNum != 0 ? (
						<>
							<Izaas
								izaas={paginatedAthkar}
								playIzaa={playIzaa}
								setData={setData}
							/>
							<Pagination
								itemsNumber={
									searchValue
										? searchedAthkar
											? searchedAthkarNum
											: 0
										: radios.length
								}
								itemsPerPage={12}
								changePageNumber={changePageNumber}
								page={page}
							/>
						</>
					) : (
						<ResultMessage
							message="لا توجد أي نتائج لعملية البحث"
							color="red"
						/>
					)}
				</>
			)}
			<Popup message={data.message} open={data.isOpen} />
		</div>
	);
}

export default IzaasContainer;
