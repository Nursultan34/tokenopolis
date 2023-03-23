import { asset } from "$fresh/runtime.ts";
import { boolState } from "#/utils.ts";

export default function Item({ status }: { status?: string }) {
	const [showDetails, toggleDetails] = boolState();

	return (
		<div class="relative w-full">
			<div
				class={`flex px-[32px] py-[14px] justify-between bg-white shadow-lg shadow-black/15 hover:(cursor-pointer bg-[#F4F4F4]) ${showDetails ? "bg-[#F4F4F4]" : ""}`}
				onClick={toggleDetails}
			>
				<div class="flex gap-x-[60px] items-center text-[18px]">
					<span class="font-bold font-open-sans">12 дек 2018</span>

					<div class="bg-gray-white">
						<img src={asset("./lk-logo.svg")} class="" />
					</div>

					<div class="flex gap-x-2">
						<img src={asset("./transaction-arrow.svg")} alt="" />
						1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t
					</div>
				</div>
				<div class="flex gap-x-[120px] items-center ">
					<span class="text-[26px] font-bold font-open-sans">0,0094 LTC</span>
					<button
						class={`flex justify-between w-40 max-h-10 px-5 py-2 text-left ${
							status === "waiting" ? "text-gray-main bg-gray-waiting" : status === "reject" ? "text-white bg-red-3" : "text-white bg-green-3"
						} rounded-sm`}
					>
						{status === "waiting" ? "В ожидании" : status === "reject" ? "Отклонено" : "Завершено"}
						<img
							src={asset(
								`./${status === "waiting" ? "btn-waiting" : status === "reject" ? "btn-reject" : "btn-ok"}.svg`,
							)}
						/>
					</button>
				</div>
			</div>

			{showDetails && (
				<div class="w-full flex px-[32px] py-[14px] bg-[#F4F4F4] justify-between shadow-lg shadow-black/15 hover:(cursor-pointer bg-[#F4F4F4])">
					<div class="w-[1180px] flex flex-wrap gap-[20px] ">
						<label class="flex self-start text-[18px] font-bold font-open-sans">
							Статус:
							<input
								type="text"
								value="Успешно"
								class="w-[144] ml-5 px-6 py-2.5 text-[18px] bg-white border border-gray-waiting"
							/>
						</label>
						<label class="flex self-start text-[18px] font-bold font-open-sans">
							Хэш транзакции:
							<input
								type="text"
								value="jbfkjbj4453vvfvmbajhnm564ybjldg9rkjkj"
								class="w-[525px] ml-5 px-6 py-2.5 text-[18px] bg-white border border-gray-waiting"
							/>
							<img
								class="self-center ml-3 w-7 h-7 hover:(cursor-pointer)"
								src={asset("./documentcopy.svg")}
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
						</label>
						<label class="flex self-start text-[18px] font-bold font-open-sans">
							Время:
							<input
								type="text"
								value="12 дек 2018 05:37:54"
								class="w-[144] ml-5 px-6 py-2.5 text-[18px] bg-white border border-gray-waiting"
							/>
						</label>
						<label class="flex self-start text-[18px] font-bold font-open-sans">
							Комиссия сети:
							<input
								type="text"
								value="0.1563758234 LTC"
								class="w-[300px] ml-8 px-6 py-2.5 text-[18px] bg-white border border-gray-waiting"
							/>
						</label>
					</div>
					<button class="w-40 text-black text-center bg-gray-waiting">ПОСМОТРЕТЬ НА ЭКСПЛОРЕРЕ</button>
				</div>
			)}
			{
				/* {true && <p class="absolute top-20 right-64 text-xs text-darkGray">КОПИРОВАТЬ НОМЕР</p>}
				{true && <p class="absolute top-20 right-64 text-xs text-green-3">НОМЕР СКОПИРОВАН</p>} */
			}
		</div>
	);
}
