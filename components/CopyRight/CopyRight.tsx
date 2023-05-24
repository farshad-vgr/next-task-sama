export default function CopyRight() {
	return (
		<>
			<div className="absolute bottom-0 flex items-center justify-center w-full text-white -translate-x-1/2 rounded cursor-default left-1/2 bg-dark">
				<span className="hidden xs:block">کلیه حقوق مادی و معنوی این محصول متعلق به شرکت</span>{" "}
				<i className="px-2">
					{" "}
					<a href="https://samarayaneh.ir/" target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline">
						سما رایانه
					</a>
				</i>{" "}
				میباشد
				© {new Date().getFullYear()}
			</div>
		</>
	);
}
