import { Grid } from "@material-ui/core";
import Lottie from "react-lottie";

function PageDesc({ animationData, title, pageDescText }) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<>
			<Grid container className="full-gird" spacing={5}>
				<Grid item lg={5} className="lottieImage">
					<Lottie options={defaultOptions} />
				</Grid>
				<Grid item md={6}>
					<h2>{title}</h2>
					<h3 className="text">{pageDescText}</h3>
				</Grid>
			</Grid>
		</>
	);
}

export default PageDesc;
