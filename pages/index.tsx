import Head from "next/head";

interface Props {
	cities: {
		id: number;
		name: string;
		province: string;
	}[];
}

export default function Home({ cities }: Props) {
	console.log(cities);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<div style={{ minHeight: "500px" }}>This is for test HOME page</div>
		</>
	);
}

export async function getStaticProps() {
	// Fetching data from internal "API route"
	// const response = await fetch(`https://fv-travelo-iran.vercel.app/api/cities?country=iran`);
	const response = await fetch(`http://localhost:3000/api/cities?country=iran`);
	const cities = await response.json();

	return {
		props: {
			cities,
		},
	};
}
