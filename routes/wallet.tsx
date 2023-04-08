import ReplenishWithdraw from "@/components/wallet/ReplenishWithdraw.tsx";
import Transactions from "@/components/wallet/Transactions.tsx";
import Balance from "@/components/wallet/Balance.tsx";
import screenWrapper from "#/screenWrapper.tsx";

export default function MyWallet() {
	return screenWrapper(
		<div class="row">
			<div class="col mr-[20px]">
				<ReplenishWithdraw />
				<Transactions />
			</div>
			<div class="col">
				<Balance />
			</div>
		</div>
	);
}
