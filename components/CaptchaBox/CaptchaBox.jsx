import { useRef } from "react";
import { ArcaptchaWidget } from "arcaptcha-react";

const CaptchaBox = ({ setIsDisable }) => {
	const ArRef = useRef();

	const getToken = (token) => {
		token ? setIsDisable(false) : null;
	};
	return (
		<>
			<div className="self-center">
				<ArcaptchaWidget ref={ArRef} site-key="i6qqnsxay6" callback={getToken} />
			</div>
		</>
	);
};

export default CaptchaBox;
