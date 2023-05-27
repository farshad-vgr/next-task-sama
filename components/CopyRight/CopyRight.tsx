export default function CopyRight() {
	return (
		<>
			<div className="absolute bottom-0 flex items-center justify-center py-[2px] w-full text-white -translate-x-1/2 rounded cursor-default left-1/2">
				<span className="hidden sm:block">کلیه حقوق مادی و معنوی این محصول متعلق به شرکت</span>{" "}
				<i className="px-2">
					{" "}
					<a href="https://samarayaneh.ir/" target="_blank" className="py-[2px] text-blue-400 hover:text-blue-300 hover:underline">
						سما رایانه
					</a>
				</i>{" "}
				<span className="py-[2px] hidden sm:block me-1">میباشد</span>© {new Date().getFullYear()}
			</div>
		</>
	);
}
