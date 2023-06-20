import { useRef, memo } from "react";
import axios from "axios";
import { ArcaptchaWidget } from "arcaptcha-react";

const CaptchaBox = ({ setIsCaptchaValid, inputValue }) => {
	const ArRef = useRef();

	// This function validate user answer with correct fetched value
	const getToken = (token) => {
		axios
			.post("https://api.arcaptcha.co/arcaptcha/api/verify", {
				challenge_id: token,
				site_key: "i6qqnsxay6",
				secret_key: "ehq31ra94lqjj2cvy76r",
			})
			.then((response) => {
				response.data.success ? setIsCaptchaValid(true) : setIsCaptchaValid(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div data-testid="captcha-box" className={`relative self-center captcha-box ${inputValue?.length > 0 ? "" : "opacity-50"}`}>
				<div data-testid="captcha-box-disabler" className={`absolute w-full h-full cursor-not-allowed z-[5] ${inputValue?.length > 0 ? "hidden" : "block"}`}></div>
				<ArcaptchaWidget ref={ArRef} site-key="i6qqnsxay6" callback={getToken} />
			</div>
		</>
	);
};

export default memo(CaptchaBox);
