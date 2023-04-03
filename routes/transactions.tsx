import { asset } from "$fresh/runtime.ts";
import Item from "@/islands/Transaction.tsx";
import dashboardScreen from "#/screenWrapper.tsx";

export default function Transactions() {
	return dashboardScreen(
		<article>
			<div class="row gap-x-4 mb-1">
				<div class="flex items-center text-4">
					ОТ <input type="text" value="08/12/2022" class="w-36 mx-1 px-6 py-2.5" />
					<img src={asset("/./calendar.png")} />
				</div>
				<div class="flex items-center">
					ДО <input type="text" value="24/02/23" class="w-32 mx-1 px-6 py-2.5" />
					<img src={asset("/./calendar.png")} />
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
			<div class="col gap-y-3 pr-5 overflow-y-scroll scrollbar">
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
		</article>,
	);
}
