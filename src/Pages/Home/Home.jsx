import { lazy, Suspense } from "react";
import Title from "../../Components/Title/Title";
import "./Home.css";
import getData from "./PageDesc/data";

function Home() {
	const PageDesc = lazy(() => import("./PageDesc/PageDesc"));
	const data = [...getData()];
	return (
		<div className="home page">
			<Title title={"الصفحة الرئيسية"} />
			<h3>
				أهلا بك في موقع القرءان الكريم، في القسم التالي ستتعرف على أجزاء الموقع.
			</h3>
			<div className="home-body">
				{data.map((obj) => {
					return (
						<Suspense key={obj.title}>
							<PageDesc
								animationData={obj.jsonFile}
								title={obj.title}
								pageDescText={obj.pageDescText}
							/>
						</Suspense>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
