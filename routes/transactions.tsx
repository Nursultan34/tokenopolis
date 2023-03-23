import { asset } from "$fresh/runtime.ts";
import Item from "@/islands/Transaction.tsx";
import dashboardScreen from "#/screenWrapper.tsx";

export default function Transactions() {
	return dashboardScreen(
		<main class="pb-[42px]">
			<div class="max-w-[1480px] mx-auto pt-[42px] pb-[19px] border-b-1 border-gray-bg">
				<div class="flex gap-x-4 mb-1">
					<div class="flex items-center">
						<label>
							ОТ
							<input
								type="text"
								value="08/12/2022"
								class="text-[18px] w-[144px] mx-[4px] px-6 py-2.5"
							/>
						</label>

						<img src={asset("./calendar.png")} alt="" />
					</div>

					<div class="flex items-center">
						<label>
							ДО
							<input
								type="text"
								value="24/02/23"
								class="text-[18px] w-[124px] mx-[4px] px-6 py-2.5"
							/>
						</label>

						<img src={asset("./calendar.png")} alt="" />
					</div>
				</div>

				<div class="flex items-center pr-10 gap-x-6">
					<span class="text-black">ВСЕ</span>

					<span class="text-gray-main">ИСХОДЯЩИЕ</span>

					<span class="text-gray-main">ВХОДЯЩИЕ</span>

					<div class="flex gap-x-3 items-center ml-auto text-black">
						<span class="text-4xl">2345</span>
						Всего транзакций
					</div>
				</div>

				<div class="flex flex-col gap-y-3 pr-5 max-h-[788px] overflow-y-scroll scrollbar">
					<Item />
					<Item />
					<Item status="reject" />
					<Item status="waiting" />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</main>
	);
}
