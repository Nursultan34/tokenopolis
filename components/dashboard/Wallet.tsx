interface TokenBalance {
	name: string;
	icon: string;
	valueXLM: number;
	valueEuro: number;
	date: string;
}

const testBalances: TokenBalance[] = [
	{
		name: "POLISVILLA1",
		icon: "https://pngicon.ru/file/uploads/ikonka-bitkoin.png",
		valueXLM: 345.0,
		valueEuro: 704.1,
		date: "24.12.23",
	},
	{
		name: "POLISVILLA2",
		icon: "https://pngicon.ru/file/uploads/ikonka-bitkoin.png",
		valueXLM: 345.2,
		valueEuro: 704.1,
		date: "24.12.23",
	},
	{
		name: "POLISVILLA3",
		icon: "https://pngicon.ru/file/uploads/ikonka-bitkoin.png",
		valueXLM: 345.0,
		valueEuro: 704.1,
		date: "24.12.23",
	},
	{
		name: "POLISVILLA4",
		icon: "https://pngicon.ru/file/uploads/ikonka-bitkoin.png",
		valueXLM: 345.0,
		valueEuro: 704.1,
		date: "24.12.23",
	},
	{
		name: "POLISVILLA5",
		icon: "https://pngicon.ru/file/uploads/ikonka-bitkoin.png",
		valueXLM: 345.0,
		valueEuro: 704.1,
		date: "24.12.23",
	},
];

export default function Wallet() {
	return (
		<div class="bg-white-light flex flex-col justify-center items-center w-full h-full">
			<div class="flex w-full" style={{ flex: 0.5 }}>
				<span class="text-2xl ml-4 pt-4 font-medium">Мой кошелёк</span>
			</div>
			<div class={`w-full overflow-scroll`} style={{ display: "flex", flex: 3 }}>
				<div class="flex flex-wrap ml-2 pr-4">
					{testBalances.map(Balance)}
				</div>
			</div>
			<div class="w-full flex flex-col pl-5 pt-4 flex" style={{ flex: 0.5 }}>
				<div class="flex flex-row justify-center items-center">
					<span class="text-xs flex justify-start items-center" style={{ flex: 1 }}>Общий баланс</span>
					<span class="text-green-dark flex justify-start items-center" style={{ flex: 1 }}>+12% за неделю</span>
				</div>
				<div class="flex flex-row justify-center items-center">
					<span class="text-2xl font-medium flex justify-start items-center" style={{ flex: 1 }}>2237.93€</span>
					<span class="text-2xl font-medium text-yellow-orange flex justify-start items-center" style={{ flex: 1 }}>415 XLM</span>
				</div>
			</div>
			<div class="flex justify-center items-center w-full" style={{ flex: 1 }}>
				<button class="w-[calc(90%)] h-[calc(42px)] bg-gray-dark text-white-light rounded-lg font-light hover:opacity-80">ПОПОЛНИТЬ КОШЕЛЕК</button>
			</div>
		</div>
	);
}

function Balance({ name, icon, valueXLM, valueEuro, date }: TokenBalance) {
	return (
		<div class="w-[calc(12rem)] h-[calc(8.5rem)] bg-dark-midnight mt-2 ml-2 flex-auto hover:opacity-90">
			<div class="flex flex-row justify-between pl-4 pr-4 pt-4" style={{ flex: 1 }}>
				<span class="text-white-light">{name}</span>
				<img src={icon} class="w-[calc(36px)] h-[calc(36px)]" />
			</div>
			<div class="pl-4 flex flex-1">
				<span class="text-3xl text-white-light">{valueXLM}</span>
			</div>
			<div class="flex justify-between pl-4 pr-4 flex flex-1">
				<span class="text-gray-dashed">{valueEuro}€</span>
				<span class="text-gray-dashed">до{date}</span>
			</div>
		</div>
	);
}
