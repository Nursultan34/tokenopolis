import { TransactionsObject } from "../../islands/TransactionCard.tsx";
import TransactionsCard from "../../islands/TransactionCard.tsx";

interface ITransactionsCardComponent {
	testMas: Array<TransactionsObject>;
}

export const transactionMas: Array<TransactionsObject> = [
	{
		time: "08:23",
		date: "18 дек 2018",
		status: true,
		transactions: 0.449,
		walletNum: "asfavdvadv8896vavasv9as8scSC554CSCzcz",
	},
	{
		time: "08:23",
		date: "18 дек 2018",
		status: false,
		transactions: 0.449,
		walletNum: "asfavdvadv8896vavasv9as8scSC554CSCzcz",
	},
	{
		time: "08:23",
		date: "18 дек 2018",
		status: false,
		transactions: 0.449,
		walletNum: "asfavdvadv8896vavasv9as8scSC554CSCzcz",
	},
	{
		time: "08:23",
		date: "18 дек 2018",
		status: true,
		transactions: 0.449,
		walletNum: "asfavdvadv8896vavasv9as8scSC554CSCzcz",
	},
	{
		time: "08:23",
		date: "18 дек 2018",
		status: true,
		transactions: 0.449,
		walletNum: "asfavdvadv8896vavasv9as8scSC554CSCzcz",
	},
	{
		time: "08:23",
		date: "18 дек 2018",
		status: true,
		transactions: 0.449,
		walletNum: "asfavdvadv8896vavasv9as8scSC554CSCzcz",
	},
];
export function TransactionsComponent() {
	return (
		<div className="w-full h-full bg-white-light">
			<div className="flex flex-row justify-between pl-8 pr-8 pt-4" style={{ display: "flex", flex: 1 }}>
				<span className="font-medium text-2xl">Транзакции</span>
				<button className="bg-gray-dark rounded-md text-sm text-white-light font-light w-[calc(40%)] hover:opacity-80">ПОСМОТРЕТЬ ВСЕ</button>
			</div>
			<div className="flex justify-start pl-8 pr-20 pt-2" style={{ display: "flex", flex: 1 }}>
				<div style={{ display: "flex", flex: 1 }}>
					<span className="text-xs text-gray-cool">ВСЕ</span>
				</div>
				<div style={{ display: "flex", flex: 2 }}>
					<span className="text-xs text-gray-cool">ОТПРАВЛЕННЫЕ</span>
				</div>
				<div style={{ display: "flex", flex: 2 }}>
					<span className="text-xs text-gray-cool">ПРИНЯТЫЕ</span>
				</div>
			</div>
			<div className="flex justify-start overflow-auto" style={{ display: "flex", flex: 2, height: "80%" }}>
				<TransactionsCardComponent testMas={transactionMas} />
			</div>
		</div>
	);
}

export function TransactionsCardComponent(props: ITransactionsCardComponent) {
	const { testMas } = props;
	return (
		<div className="w-full pt-2 pl-7 pr-7 justify-center items-center">
			{testMas.map((data) => <TransactionsCard {...data} />)}
		</div>
	);
}
