export default function CopyRight() {
	return (
		<>
			<div className="flex items-center justify-center -translate-x-1/2 left-1/2 py-1 w-full h-10 text-white bg-black cursor-default">
				<span className="hidden sm:block">کلیه حقوق مادی و معنوی این محصول متعلق به شرکت</span>{" "}
				<a href="https://samarayaneh.ir/" target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline">
					سما رایانه
				</a>
				<span className="hidden sm:block me-1">میباشد</span>© {new Date().getFullYear()}
			</div>
		</>
	);
}
