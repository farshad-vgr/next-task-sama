import { memo } from "react";
import Image from "next/image";

interface Props {
	formTitle: string;
	imageSrc: string;
	imageWidth: number;
	imageHeight: number;
}

const FormHeader = ({ formTitle, imageSrc, imageWidth, imageHeight }: Props) => {
	return (
		<>
			<section className="flex flex-col justify-center items-center gap-2">
				<h1 className="cursor-default p-1">{formTitle}</h1>

				<Image src={imageSrc} width={imageWidth} height={imageHeight} alt="Logo" loading="lazy" style={{ width: "auto", height: "auto" }} />
			</section>
		</>
	);
};

export default memo(FormHeader);
