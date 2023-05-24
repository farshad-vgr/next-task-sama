interface Props {
	children: JSX.Element | JSX.Element[];
}

export default function Container({ children }: Props) {
	return (
		<>
			<section className="flex flex-col items-center mx-auto p-4 w-4/5">{children}</section>
		</>
	);
}
