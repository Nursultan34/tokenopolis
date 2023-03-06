import { asset } from "$fresh/runtime.ts";

const objectsData = [
	{
		name: "Soho kompleks, Montenegro",
		number: "40494",
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		imgs: "/",
	},
	{
		name: "Soho kompleks, Bar",
		number: "40494",
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		imgs: "/",
	},
	{
		name: "Super puper Soho kompleks, Budva",
		number: "40494",
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		imgs: "/",
	},
	{
		name: "Soho kompleks, Montenegro",
		number: "40494",
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		imgs: "/",
	},
	{
		name: "Soho kompleks, Montenegro",
		number: "40494",
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		imgs: "/",
	},
	{
		name: "Soho kompleks, Montenegro",
		number: "40494",
		cost: "285,14",
		tokenCost: "35,7",
		investors: "135",
		square: "75",
		date: "12-2023",
		profitability: "12,4",
		imgs: "/",
	},
];

export default function Objects() {
	return (
		<main class="bg-gray-fon">
			<div id="objects-container" class="col h-screen pt-3.5 pb-10 pr-40 pl-[60px]">
				<p class="text-gray-main">Объекты</p>
				<div id="blocks-container" class="row flex-wrap w-auto gap-5 overflow-y-scroll">
					<ObjectsBlocks objectsData={objectsData} />
				</div>
			</div>
		</main>
	);
}

function ObjectsBlocks({ objectsData }) {
	const objectsTable = objectsData.map((data: any) => <Object {...data} />);

	return (
		<>
			{objectsTable}
		</>
	);
}

const textxs = "text-gray-main text-xs";

function Object(
	{ name, number, cost, tokenCost, investors, square, date, profitability }: {
		name: string;
		number: string;
		cost: string;
		tokenCost: string;
		investors: string;
		square: string;
		date: string;
		profitability: string;
	},
) {
	return (
		<div class="row justify-between min-w-[715px] max-h-[439px] bg-white px-10 py-12 text-black shadow-lg">
			<div id="object-img" class="relative">
				<img class="w-[354px] h-[343px]" src={asset("/photos/photo1.svg")} alt="" />
				<button>
					<img class="absolute top-4 left-4 w-[28px] h-[28px]" src={asset("/obj-heart.svg")} alt="" />
				</button>
				<button>
					<img class="absolute top-1/2 left-2" src={asset("/obj-arr-left.svg")} alt="" />
				</button>
				<button>
					<img class="absolute top-1/2 right-2" src={asset("/obj-arr-right.svg")} alt="" />
				</button>
				<div class="absolute top-3 right-3 w-[139px] h-[34px] bg-green-btn text(center white) leading-none pt-2">
					идут продажи
				</div>
			</div>
			<div id="object-info" class="col justify-between max-w-[261px] max-h-[343px]">
				<div>
					<p class="font-bold text-[26px] leading-6">{name}</p>
					<p class="text(sm gray-main)">ОБЪЕКТ №{number}</p>
					<div class="row justify-between">
						<div class="col justify-end gap-1 text([16px] gray-main)">
							<div id="square" class="row gap-1">
								<div>
									<img class="" src={asset("/obj-square-icon.svg")} />
								</div>
								<p class="self-center">{square} кв м</p>
							</div>
							<div id="date-info" class="row gap-1">
								<div>
									<img class="" src={asset("/obj-date-icon.svg")} />
								</div>
								<p class="self-center">{date}</p>
							</div>
							<div id="profit-info" class="row gap-1">
								<div>
									<img class="" src={asset("/obj-profit-icon.svg")} />
								</div>
								<p class="self-center">{profitability} %/год</p>
							</div>
						</div>
						<div class="text-right">
							<p class={textxs}>ЦЕНА</p>
							<p class="mb-1 font-bold text-[34px] leading-8 pb-1">€{cost}</p>
							<p class={textxs}>ТОКЕН ЦЕНА</p>
							<p class="font-bold text(4xl orange-main)">{tokenCost}</p>
						</div>
					</div>
				</div>
				<div>
					<p class="mb-2 text(sm green-btn right)">{investors} УЖЕ ПРОИНВЕСТИРОВАЛИ</p>
					<button class="w-full h-12 border(1 gray-bg) mb-1 hover:text-orange-main">подробнее</button>
					<button class="w-full h-12 bg-yellow-btn hover:bg-orange-main">ИНВЕСТИРОВАТЬ</button>
				</div>
			</div>
		</div>
	);
}
