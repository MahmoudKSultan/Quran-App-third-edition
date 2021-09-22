import { useState } from "react";
import paginate from "../../../utils/paginate";
import search from "../../../utils/search";
import useFetch from "./../../../Hooks/useFetch";
const GetHesnData = () => {
	const { data, loading, error } = useFetch(
		"http://mp3quran.net/api/husn/ar/husn_ar.json"
	);

	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const athkar = data && data["العربية"];
	const searchedAthkar = data && search(athkar, searchValue, "Title");
	const paginatedAthkar = data && paginate(searchedAthkar || athkar, page, 21);

	const changePageNumber = (page) => {
		setPage(page);
	};

	return {
		changePageNumber,
		paginatedAthkar,
		data,
		loading,
		error,
		athkar,
		page,
		setSearchValue,
		searchedAthkar,
		searchValue,
	};
};

export default GetHesnData;
