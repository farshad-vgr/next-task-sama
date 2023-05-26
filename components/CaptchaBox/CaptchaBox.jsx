import { useRef, memo } from "react";
import { ArcaptchaWidget } from "arcaptcha-react";

const CaptchaBox = ({ setIsDisable, inputValue }) => {
	const ArRef = useRef();
	console.log(ArRef.current);

	const getToken = (token) => {
		token ? setIsDisable(false) : null;
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
