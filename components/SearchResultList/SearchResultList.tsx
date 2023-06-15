import { Fragment, memo } from "react";

interface Props {
	results: {}[];
}

const SearchResultList = ({ results }: Props) => {
	return (
		<>
			<ul data-testid="search-result-list" className="w-full mt-9 px-2 text-center rounded-2xl text-[0.75rem] sm:text-base bg-white text-black hover:cursor-pointer transition-all duration-500">
				{results.map((result: any) => {
					return (
						<Fragment key={result.item.id}>
							<li className="pt-2">
								<a href={result.item.link} target="_blank">
									{result.item.title}
								</a>
							</li>
							<hr></hr>
						</Fragment>
					);
				})}
			</ul>
		</>
	);
};

export default memo(SearchResultList);
