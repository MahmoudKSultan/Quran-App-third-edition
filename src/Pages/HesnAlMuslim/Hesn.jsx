import Title from "../../Components/Title/Title";
import "./Hesn.css";
import Loading from "./../../Components/Loading/Loading";
import GetHesnData from "./data/hesnData";
import HesnBody from "./HesnBody";
import { lazy, Suspense } from "react";
import Form from "../../Components/Form/Form";

function Hesn() {
	const {
		changePageNumber,
		paginatedAthkar,
		loading,
		error,
		athkar,
		page,
		setSearchValue,
		searchedAthkar,
		searchValue,
	} = GetHesnData();

	const Pagination = lazy(() =>
		import("../../Components/Pagination/Pagination")
	);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="hesn">
					<Title title="حصن المسلم" />
					<Form label="ابحث عن ذكر معين" setSearchValue={setSearchValue} />
					<HesnBody athkar={paginatedAthkar} />
					<Suspense fallback={<h3>Loading...</h3>}>
						<Pagination
							itemsNumber={
								searchValue
									? searchedAthkar
										? searchedAthkar.length
										: 0
									: athkar.length
							}
							itemsPerPage={20}
							changePageNumber={changePageNumber}
							page={page}
						/>
					</Suspense>
				</div>
			)}
		</>
	);
}

export default Hesn;
