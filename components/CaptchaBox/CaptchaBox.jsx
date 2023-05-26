import { useRef, memo } from "react";
import { ArcaptchaWidget } from "arcaptcha-react";
import axios from "axios";

const CaptchaBox = ({ setIsDisable, inputValue }) => {
	const ArRef = useRef();

	const getToken = (token) => {
		token ? setIsDisable(false) : null;

		console.log("mytoken: " + token);

		axios
			.post("https://api.arcaptcha.co/arcaptcha/api/verify", {
				challenge_id: token,
				site_key: "i6qqnsxay6",
				secret_key: "ehq31ra94lqjj2cvy76r",
			})
			.then((response) => {
				console.log("resdata: " + response.data.success);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className={`relative self-center ${inputValue.length > 0 ? "" : "opacity-50"}`}>
				<div className={`absolute w-full h-full cursor-not-allowed z-[5] ${inputValue.length > 0 ? "hidden" : "block"}`}></div>
				<ArcaptchaWidget ref={ArRef} site-key="i6qqnsxay6" callback={getToken} />
			</div>
		</>
	);
};

export default memo(CaptchaBox);
