import { useRef } from "react";
import { ArcaptchaWidget } from "arcaptcha-react";

const CaptchaBox = ({ setIsDisable }) => {
	const ArRef = useRef();

	const getToken = (token) => {
		token ? setIsDisable(false) : null;
	};

	const tokenExpired = () => {
		console.log("token expired!");
	};

	const challangeExpired = () => {
		console.log("challange expired!");
	};

	return (
		<>
			<div className="self-center">
				<ArcaptchaWidget
					ref={ArRef}
					site-key="i6qqnsxay6"
					callback={getToken}
					expired_callback={tokenExpired}
					chlexpired_callback={challangeExpired}
				/>
			</div>
		</>
	);
};

export default CaptchaBox;
