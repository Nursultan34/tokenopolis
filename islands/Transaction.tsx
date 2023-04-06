import { asset } from "$fresh/runtime.ts";
import { boolState } from "#/utils.ts";
import { useEffect } from "preact/hooks";

export default function Transactions({ operations }) {
	return operations.map(Transaction);
}

function Transaction({ target, isIncoming, amount, asset_code, created_at }) {
	const [showDetails, toggleDetails] = boolState();
	// TODO: deprecate status
	const status = "success";

	return (
		<div class="relative w-full">
			<div
				class={`flex lg:px-11 lg:py-[14px] px-3 py-4 justify-between bg-white shadow-lg shadow-black/15 hover:(cursor-pointer bg-[#F4F4F4]) ${showDetails ? "bg-[#F4F4F4]" : ""}`}
				onClick={toggleDetails}
			>
				<div class="flex lg:gap-x-[70px] items-center lg:text-[18px] text-[10px] gap-x-4">
					<span class="font-bold font-open-sans">{ created_at }</span>

					<div class="bg-gray-white">
						<img src={asset("/lk-logo.svg")} class="w-10 lg:w-[55px]" />
					</div>

					<div class="flex gap-x-2">
						<img src={asset(isIncoming ? "/incoming-arrow.svg" : "/outcoming-arrow.svg")} />
						<span class="hidden lg:inline-block">{ target }</span>
					</div>
				</div>
				<div class="flex lg:gap-x-[120px] gap-x-5 items-center ">
					<span class="lg:text-[26px] text-[10px] font-bold font-open-sans">{amount} {asset_code}</span>
				
			<button
						class={`flex justify-between lg:w-40 w-15 max-h-10 px-5 py-2 text-left ${
							status === "waiting" ? "text-gray-dark bg-gray-cool" : status === "reject" ? "bg-[#CD1000] text-white-light" : "bg-green-dark text-white-light"
						} rounded-sm`}
					>
						 <span class="hidden lg:inline-block"> {status === "waiting" ? "В ожидании" : status === "reject" ? "Отклонено" : "Завершено"}</span> 
						<img
							src={asset(
								`./${status === "waiting" ? "btn-waiting" : status === "reject" ? "btn-reject" : "btn-ok"}.svg`,
							)}
						/>
					</button> 
				</div>
			</div>

			{showDetails && (
				<div class="relative w-full lg:h-40 flex lg:px-11 px-3 lg:py-3 pt-4 pb-5 bg-[#F4F4F4] justify-between shadow-lg shadow-black/15 hover:(cursor-pointer bg-[#F4F4F4])">
					<div class="w-[1180px] flex lg:flex-wrap flex-col  gap-y-2 lg:max-h-40">
						<label class="flex items-center w-[180px] lg:w-[360px] justify-between lg:text-[18px] text-[10px] font-bold font-open-sans">
							Статус:
							<input
								type="text"
								value="Успешно"
								class="w-36 lg:w-[280px] lg:px-6 lg:py-2.5 px-2.5 py-2 lg:text-[18px] text-[10px] bg-white border border-gray-cool rounded-sm"
							/>
						</label>
						<label class="flex items-center w-[180px] lg:w-[360px] justify-between lg:text-[18px] text-[10px] font-bold font-open-sans">
							Время:
							<input
								type="text"
								value="12 дек 2018 05:37:54"
								class="w-36 lg:w-[280px] lg:px-6 lg:py-2.5 px-2.5 py-2 lg:text-[18px] text-[10px] bg-white border border-gray-cool rounded-sm"
							/>
						</label>
						<div class="flex">
						<label class="flex w-[266px] lg:w-[700px] justify-between items-center lg:text-[18px] text-[10px] font-bold font-open-sans ">
							Хэш транзакции:
							<input
								type="text"
								value="jbfkjbj4453vvfvmbajhnm564ybjldg9rkjkj"
								class="lg:w-[525px] w-[182px] lg:px-6 lg:py-2.5 px-2.5 py-2 lg:text-[18px] text-[10px] bg-white border border-gray-cool rounded-sm"
							/>
							
						</label>
						<img
								class="self-center ml-3 w-7 h-7 hover:(cursor-pointer)"
								src={asset("/./documentcopy.svg")}
								{
									...[] /* onMouseEnter={() => setShow("show")}
										   onMouseLeave={() => {
										   setShow("hide");
										   setMake("hide");
										   }}
										   onClick={() => {
										   setMake("show");
										   setShow("hide");
										   }} */
								}
							/>
						</div>
						<label class="flex lg:w-[475px] w-[266px] justify-between items-center lg:text-[18px] text-[10px] font-bold font-open-sans">
							Комиссия сети:
							<input
								type="text"
								value="0.1563758234 LTC"
								class="lg:w-[300px] w-[182px] lg:px-6 lg:py-2.5 px-2.5 py-2 lg:text-[18px] text-[10px] bg-white border border-gray-cool rounded-sm"
							/>
						</label>
					</div>
					<button class="absolute top-4 right-3 lg:right-11 lg:h-[5.5rem] h-[4.5rem] lg:w-40 w-28 px-5 py-2 text-black text-center lg:text-[14px] text-[10px] bg-gray-cool rounded-sm">ПОСМОТРЕТЬ НА ЭКСПЛОРЕРЕ</button>
				</div>
			)}
			{
				/* {true && <p class="absolute top-20 right-64 text-xs text-darkGray">КОПИРОВАТЬ НОМЕР</p>}
				{true && <p class="absolute top-20 right-64 text-xs text-green-3">НОМЕР СКОПИРОВАН</p>} */
			}
		</div>
	);
}
