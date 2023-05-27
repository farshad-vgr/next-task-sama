import { memo } from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

interface Props {
	btnText: string;
	isDisable: boolean;
	formData: any;
}

const GeneratePdf = ({ btnText, isDisable, formData }: Props) => {
	const downloadForm = async () => {
		const image = await toPng(formData.current, { quality: 1 });
		const doc = new jsPDF();

		doc.addImage(image, "PNG", 30, 10, 160, 50);
		doc.save("فرم نوبت");
	};

	return (
		<>
			<button
				type="button"
				className={`submit-btn flex justify-center items-center self-center gap-1 max-w-fit px-3 outline-none rounded-lg ${
					isDisable ? "cursor-not-allowed text-black bg-slate-500 opacity-50" : "cursor-pointer text-white bg-blue-400"
				}`}
				onClick={downloadForm}
				disabled={isDisable}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
					/>
				</svg>

				<span className="mt-2">{btnText}</span>
			</button>
		</>
	);
};

export default memo(GeneratePdf);
