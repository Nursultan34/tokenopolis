import ObjectsTable from "@/islands/ObjectsTable.tsx";

const objectsData = [
	{
		name: "1Soho kompleks, Montenegro",
		number: 1,
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		status: "sell",
		images: ["/photos/photo1.svg", "/photos/photo2.svg"],
		favorite: false,
		invested: 2000,
		reqInvestments: 120000,
		isMyObject: false,
	},
	{
		name: "2Soho kompleks, bar",
		number: 2,
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		status: "hit",
		images: ["/photos/photo1.svg", "/photos/photo2.svg"],
		favorite: true,
		invested: 120000,
		reqInvestments: 120000,
		isMyObject: false,
	},
	{
		name: "3Soho kompleks, Tivat",
		number: 3,
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		status: "sell",
		images: ["/photos/photo1.svg", "/photos/photo2.svg"],
		favorite: true,
		invested: 2093,
		reqInvestments: 120000,
		isMyObject: true,
	},
	{
		name: "4Soho kompleks, Podgorica",
		number: 4,
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		status: "sold",
		images: ["/photos/photo1.svg", "/photos/photo2.svg"],
		favorite: false,
		invested: 50000,
		reqInvestments: 120000,
		isMyObject: true,
	},
];
// statuses = [sell, hit, sold];

export default function Objects() {
	return (
		<main>
			<ObjectsTable objects={objectsData} />
		</main>
	);
}
