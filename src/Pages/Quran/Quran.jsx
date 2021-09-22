// import { Button } from "@material-ui/core";
// import React, { useState } from "react";
// import "./Quran.css";
// function Quran() {
// 	const [pageNumber, setPage] = useState(0);
// 	const [rightPage, setRightPage] = useState(
// 		`http://cdn.qurango.net/Sura2/files/mobile/${2 * pageNumber + 1}.jpg`
// 	);
// 	const [leftPage, setLeftPage] = useState(
// 		`http://cdn.qurango.net/Sura2/files/mobile/${2 * pageNumber}.jpg`
// 	);

// 	let pages = [];
// 	let counter = 1;
// 	while (pages.length != 15) {
// 		pages.push(`http://cdn.qurango.net/Sura2/files/mobile/${counter}`);
// 		++counter;
// 	}

// 	console.log(pages);

// 	return (
// 		<div className="quran">
// 			<div className="wrap">
// 				<div className="rightPaper toLeft">
// 					<img
// 						src={`http://cdn.qurango.net/Sura2/files/mobile/${
// 							2 * pageNumber
// 						}.jpg`}
// 						alt=""
// 					/>
// 				</div>
// 				<div className="leftPaper toRight">
// 					<img
// 						src={`http://cdn.qurango.net/Sura2/files/mobile/${
// 							2 * pageNumber + 1
// 						}.jpg`}
// 						alt=""
// 					/>
// 				</div>
// 			</div>

// 			<Button
// 				className="prev"
// 				variant="contained"
// 				color="primary"
// 				onClick={() => setPage((pageNumber) => pageNumber - 1)}
// 				disabled={pageNumber == 0 ? true : false}
// 			>
// 				السابق
// 			</Button>
// 			<Button
// 				className="next"
// 				variant="contained"
// 				color="primary"
// 				onClick={() => setPage((pageNumber) => pageNumber + 1)}
// 				disabled={pageNumber == 603 ? true : false}
// 			>
// 				التالي
// 			</Button>
// 		</div>
// 	);
// }

// export default Quran;
