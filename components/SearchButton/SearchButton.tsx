import { useState } from "react";

export default function SearchButton() {
  const [elementWidth, setElementWidth] = useState("w-10");
  const [searchValue, setSearchValue] = useState("");

	return (
		<>
			<div
				onClick={() => setElementWidth((prevValue) => (prevValue === "w-10" ? "w-80" : "w-10"))}
				className={`absolute top-2 right-5 ${elementWidth} h-10 mt-1 px-2 rounded-full text-base bg-red-500 text-white hover:bg-red-600 hover:cursor-pointer transition-all duration-700`}>
				{elementWidth === "w-80" ? (
					<input
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => setSearchValue(e.target.value)}
						type="text"
						placeholder="Search..."
						value={searchValue}
						maxLength={25}
						className="absolute top-1/2 -translate-y-1/2 left-2 -ml-1 p-1 pl-3 w-[85%] mr-2 rounded-full outline-none text-black"></input>
				) : null}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</div>
		</>
	);
}
