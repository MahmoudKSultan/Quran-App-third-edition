import notFoundLottie from "../../lotties/not-found.json";
import Lottie from "react-lottie";
import "./style.css";
function NotFound() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: notFoundLottie,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className="lottieBox">
			<Lottie options={defaultOptions} />
			<h2>الصفحة التي طلبتها غير موجودة</h2>
		</div>
	);
}

export default NotFound;
