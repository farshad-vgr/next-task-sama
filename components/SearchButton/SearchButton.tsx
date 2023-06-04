import { useState } from "react";

const hospitals = [
	{
		id: 1,
		title: "مرکز تصویربرداری امام رضا",
		link: "https://www.drsaina.com/medical-imaging/4004/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%AE%DB%8C%D8%B1%DB%8C%D9%87-%D8%A7%D9%85%D8%A7%D9%85-%D8%B1%D8%B6%D8%A7",
	},
	{
		id: 2,
		title: "مرکز تصویربرداری جام جم",
		link: "https://www.drsaina.com/medical-imaging/1808/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1-%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%AC%D8%A7%D9%85-%D8%AC%D9%85",
	},
	{
		id: 3,
		title: "مرکز تصویربرداری تهران",
		link: "https://www.drsaina.com/medical-imaging/1807/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1-%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%AA%D9%87%D8%B1%D8%A7%D9%86",
	},
	{
		id: 4,
		title: "مرکز تصویربرداری دانش",
		link: "https://www.drsaina.com/medical-imaging/1797/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%B1%D8%A7%D8%AF%DB%8C%D9%88%D9%84%D9%88%DA%98%DB%8C-%D9%88-%D8%B3%D9%88%D9%86%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D8%AF%D8%A7%D9%86%D8%B4",
	},
	{
		id: 5,
		title: "مرکز تصویربرداری شهید مطهری",
		link: "drsaina.com/medical-imaging/1766/مرکز-تصویربرداری-شهید-مطهری",
	},
	{
		id: 6,
		title: "مرکز تصویربرداری یحیائیان",
		link: "https://www.drsaina.com/medical-imaging/1757/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%B4%D9%81%D8%A7-%DB%8C%D8%AD%DB%8C%D8%A7%D8%A6%DB%8C%D8%A7%D9%86",
	},
	{
		id: 7,
		title: "مرکز تصویربرداری ایرانشهر",
		link: "https://www.drsaina.com/medical-imaging/1737/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D8%B4%D9%87%D8%B1",
	},
	{
		id: 8,
		title: "مرکز تصویربرداری آیت اله کاشانی",
		link: "https://www.drsaina.com/medical-imaging/1721/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1-%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D8%A2%DB%8C%D8%AA-%D8%A7%D9%84%D9%87-%DA%A9%D8%A7%D8%B4%D8%A7%D9%86%DB%8C",
	},
	{
		id: 9,
		title: "مرکز تصویربرداری نیاوران",
		link: "https://www.drsaina.com/medical-imaging/1709/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1-%D8%A8%D8%B1%D8%AF%D8%A7%D8%B2%DB%8C-%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86",
	},
	{
		id: 10,
		title: "مرکز تصویربرداری درمانگاه نارمک",
		link: "https://www.drsaina.com/medical-imaging/1703/%D9%85%D8%B1%DA%A9%D8%B2-%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C-%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DA%AF%D8%A7%D9%87-%D9%86%D8%A7%D8%B1%D9%85%DA%A9",
	},
];

export default function SearchButton() {
	const [elementWidth, setElementWidth] = useState("w-10");
	const [searchValue, setSearchValue] = useState("");
	const [results, setResults] = useState<any>("");

	return (
		<>
			<div
				onClick={() => {
					setElementWidth((prevValue) => (prevValue === "w-10" ? "w-80" : "w-10"));
					setSearchValue("");
					setResults("");
				}}
				className={`${elementWidth} min-h-[2.5rem] p-1 rounded-[1.25rem] text-base bg-red-700 text-white hover:bg-red-600 hover:cursor-pointer transition-all duration-500`}>
				{elementWidth === "w-80" ? (
					<input
						onClick={(e) => e.stopPropagation()}
						onChange={async (e) => {
							const { value } = e.currentTarget;

							// Dynamically load fuse.js
							const Fuse = (await import("fuse.js")).default;
							const fuse = new Fuse(hospitals, { threshold: 0.3, keys: ["title"] });

							setSearchValue(value);
							setResults(fuse.search(value));
						}}
						type="text"
						autoFocus
						placeholder="جستجو..."
						value={searchValue}
						maxLength={25}
						className="absolute top-1 right-2 ml-2 -mr-1 p-1 pb-0 pr-3 w-[85%] h-[2rem] rounded-full outline-none text-black"></input>
				) : null}

				{results.length > 0 && elementWidth === "w-80" && (
					<ul className="w-full mt-9 px-2 text-center rounded-2xl text-base bg-white text-black hover:cursor-pointer transition-all duration-500">
						{results.map((item: any) => {
							return (
								<>
									<li key={item.item.id} className="pt-2">
										<a href={item.item.link} target="_blank">
											{item.item.title}
										</a>
									</li>
									<hr></hr>
								</>
							);
						})}
					</ul>
				)}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="absolute top-2 left-2 w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</div>
		</>
	);
}
