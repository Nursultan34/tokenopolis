import { asset } from "$fresh/runtime.ts";

export type TransactionsObject = {
	time: string;
	date: string;
	status: boolean;
	transactions: number;
	walletNum: string;
};

function TransactionsCard(props: TransactionsObject) {
	const { time, date, status, transactions, walletNum } = props;
	return (
		<div class="bg-gray-light w-full h-[70px] mt-2">
			<div class="pt-3 pl-5 pr-5 flex justify-between" style={{ display: "flex", flex: 1 }}>
				<div>
					<span class="text-gray-dashed text-sm">{time},</span>
					<span class="text-gray-dashed text-sm">{date}</span>
				</div>
				<div class="flex flex-row">
					<img class="w-[28px] h-[24px] mr-2" src={asset(`transactionsIcon/${status ? "right" : "left"}.png`)} />
					<span class="text-gray-dashed">{transactions} FTД</span>
				</div>
			</div>
			<div class="justify-start pl-5" style={{ display: "flex", flex: 1 }}>
				<span>{walletNum}</span>
			</div>
		</div>
	);
}

export default TransactionsCard;
