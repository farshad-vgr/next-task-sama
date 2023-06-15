import { Dispatch, SetStateAction, memo } from "react";

interface Props {
	hospitals: {}[];
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
	setResults: Dispatch<any>;
}

const SearchInput = ({ hospitals, searchValue, setSearchValue, setResults }: Props) => {
	return (
		<>
			<input
				data-testid="search-input"
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
				autoFocus={true}
				placeholder="جستجو..."
				value={searchValue}
				maxLength={15}
				className="absolute top-1 right-2 ml-2 -mr-1 p-1 pb-0 pr-3 w-[80%] sm:w-[88%] h-[2rem] rounded-full outline-none text-black"></input>
		</>
	);
};

export default memo(SearchInput);
