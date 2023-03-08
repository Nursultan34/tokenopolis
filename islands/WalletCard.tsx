/* import { ObjectWalletCard } from "../components/DashBoardComponent/generalComponent/WalletCardComponent.tsx"; */

/* function WalletCard(props: ObjectWalletCard) { */
function WalletCard(props) {
	const { tokenName, tokenImage, tokenValueXLM, tokenValueEuro, date } = props;
	return (
		<div class="w-[calc(12rem)] h-[calc(8.5rem)] bg-darkGray mt-2 ml-2 flex-auto hover:opacity-90">
			<div class="flex flex-row justify-between pl-4 pr-4 pt-4" style={{ display: "flex", flex: 1 }}>
				<span class="text-white">{tokenName}</span>
				<img src={tokenImage} class="w-[calc(36px)] h-[calc(36px)]" />
			</div>
			<div class="pl-4" style={{ display: "flex", flex: 1 }}>
				<span class="text-3xl text-white">{tokenValueXLM}</span>
			</div>
			<div class="flex justify-between pl-4 pr-4" style={{ display: "flex", flex: 1 }}>
				<span class="text-gray-dashed">{tokenValueEuro}€</span>
				<span class="text-gray-dashed">до{date}</span>
			</div>
		</div>
	);
}

export default WalletCard;
