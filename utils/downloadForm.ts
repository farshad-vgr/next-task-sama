import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

export async function downloadForm(refElement: any) {
	const screenImage = await toPng(refElement, { quality: 1 });
	const pdfFile = new jsPDF();

	pdfFile.addImage(screenImage, "PNG", 30, 20, 160, 130);
	pdfFile.save("فرم نوبت");
}
