import { useRef } from "react";
import { ArcaptchaWidget } from "arcaptcha-react";

const CaptchaBox = () => {
	const ArRef = useRef();

	const getToken = (token) => {
		token ? console.log("this is token: " + token) : console.log("no token yet!");
	};
	return (
		<>
			<div>
				<ArcaptchaWidget ref={ArRef} site-key="i6qqnsxay6" callback={getToken} />
			</div>
		</>
	);
};

export default CaptchaBox;
