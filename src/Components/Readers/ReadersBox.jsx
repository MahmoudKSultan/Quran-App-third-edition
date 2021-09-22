import React, { lazy, Suspense, useState } from "react";
import "./style.css";
import Loading from "./../Loading/Loading";
import Title from "../Title/Title";
import paginate from "../../utils/paginate";
import search from "../../utils/search";
import Readers from "./Readers";
import useFetch from "./../../Hooks/useFetch";
import Form from "../Form/Form";
import ResultMessage from "./../ResultMessage/ResultMessage";

function ReadersBox({ history }) {
	const Pagination = lazy(() => import("./../Pagination/Pagination"));

	const {
		data: readers,
		loading,
		error,
	} = useFetch(
		"https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR1z-Hd4ZHS8Wf967RNvusdLlDY4gcjJAPitUx3KgOd1YcIMiarRlmT3ei4"
	);

	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const searchedReaders = search(readers || [], searchValue, "name");
	const paginatedReaders = paginate(searchedReaders || readers, page, 15);

	const changePageNumber = (page) => setPage(page);
	// console.log("readers => chunk 13");
	return (
		<React.Fragment>
			{error ? (
				<ResultMessage text="حصل خطأ ما!" />
			) : loading ? (
				<Loading />
			) : (
				<div className="readersBox">
					<Title title="قائمة القراء" />
					<Form label="ابحث عن قارئ" setSearchValue={setSearchValue} />
					<Readers readers={paginatedReaders} history={history} />
					<Suspense fallback={<Loading />}>
						<Pagination
							itemsNumber={
								searchValue
									? searchedReaders
										? searchedReaders.length
										: 0
									: readers.length
							}
							itemsPerPage={15}
							changePageNumber={changePageNumber}
							page={page}
						/>
					</Suspense>
				</div>
			)}
		</React.Fragment>
	);
}

export default ReadersBox;
