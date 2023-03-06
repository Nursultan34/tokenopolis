import { masTest, WalletComponent } from "./generalComponent/WalletCardComponent.tsx";
import { css, tw } from "twind/css";

export function MyWalletComponent() {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<div className="w-full" style={{ display: "flex", flex: 0.5 }}>
				<span className="text-2xl ml-4 pt-4 font-medium">Мой кошелёк</span>
			</div>
			<div className={`w-full overflow-scroll`} style={{ display: "flex", flex: 3 }}>
				<WalletComponent mas={masTest} />
			</div>
			<div className="w-full flex flex-col pl-5 pt-4" style={{ display: "flex", flex: 0.5 }}>
				<div className="flex flex-row justify-center items-center">
					<span className="text-xs flex justify-start items-center" style={{ display: "flex", flex: 1 }}>Общий баланс</span>
					<span className="text-green-3 flex justify-start items-center" style={{ display: "flex", flex: 1 }}>+12% за неделю</span>
				</div>
				<div className="flex flex-row justify-center items-center">
					<span className="text-2xl font-medium flex justify-start items-center" style={{ display: "flex", flex: 1 }}>2237.93€</span>
					<span className="text-2xl font-medium text-yellow-orange flex justify-start items-center" style={{ display: "flex", flex: 1 }}>415 XLM</span>
				</div>
			</div>
			<div className="flex justify-center items-center w-full" style={{ display: "flex", flex: 1 }}>
				<button className="w-[calc(90%)] h-[calc(42px)] bg-gray-main text-white rounded-lg font-light hover:opacity-80">ПОПОЛНИТЬ КОШЕЛЕК</button>
			</div>
		</div>
	);
}
