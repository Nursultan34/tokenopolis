import { asset } from "$fresh/runtime.ts";
import screenWrapper from "@/lib/screenWrapper.tsx";
import { Handlers } from "$fresh/server.ts";
import { getObject } from "#/db.ts";
import { getImages, redirectTo, eur } from "#/utils.ts";

export const handler: Handlers = {
	async GET(req, ctx) {
		const obj = await getObject(ctx.params.id);
		if (obj == undefined)
			return redirectTo("/no-such-object"); // Must be 404
		const pics = getImages("objects", ctx.params.id);
		console.log(pics);
		return ctx.render({ pics, ...obj });
	}
}

export default function Object({ data }) {
	return screenWrapper(
		<article>
			<div class="mx-auto mt-[15px] w-[1479px] h-[2302px]">
				<p class="mb-[4px] text-gray-main">Объекты &gt; Porto Montenegro</p>
				<section class="flex gap-x-[32px] pl-[36px] pt-[44px] pb-[48px] bg-white rounded-sm shadow-lg shadow-black/15">
					<LeftSection {...data} />
					<RightSection {...data} />
				</section>
			</div>
		</article>,
	);
}

function LeftSection(data) {
	return (
		<div class="w-[804px] flex flex-col gap-[32px]">
			<img src={asset(data.pics[0])} />
			<div class="flex gap-[20px] mt-[-12px]">
				<img src={asset("/slide1.png")} />
				<img src={asset("/slide2.png")} />
				<img src={asset("/slide3.png")} />
			</div>
			<div class="flex gap-[80px] mt-[18px] ml-[37px] font-light">
				<div class="text-center divide-y divide-gray-bg">
					<p class="uppercase text-[18px]">Инвесторы</p>
					<p class="text-[64px]">{data.investersAmount}</p>
				</div>
				<div class="text-center divide-y divide-gray-bg">
					<p class="uppercase text-[18px]">Стоимость объекта</p>
					<p class="text-[64px]">{eur.format(data.objectPrice)}</p>
				</div>
				<div class="text-center divide-y divide-gray-bg">
					<p class="uppercase text-[18px]">Стоимость аренды</p>
					<p class="text-[64px]">€1430</p>
				</div>
			</div>
			<div class="flex flex-col gap-y-[30px] text-[18px]">
				<p>Адрес: {data.location}</p>
				<p>{data.description}</p>
			</div>
			<div class="flex gap-x-[60px] mx-auto text-[18px]">
				<div class="font-light">
					<p>Этаж:</p>
					<p>Тип отопления:</p>
					<p>Балкон/Терраса:</p>
					<p>Гараж/Парковка:</p>
					<p>Диагностикаэнергоэффективности:</p>
					<p>Планируется сдача в аренду:</p>
				</div>
				<div>
					<p>3</p>
					<p>Электрический</p>
					<p>Да</p>
					<p>Нет</p>
					<p>NS</p>
					<p>Да</p>
				</div>
			</div>
			<div class="flex flex-col gap-y-[10px] text-[18px]">
				<p class="font-bold font-open-sans">Потенциал доходности</p>
				<p>
					Прогноз арендной платы основан на чрезвычайном потенциале зимнего сезона, так как три долины пользуются определенным снежным покровом с начала декабря до начала
					мая, а летний бонус связан с развитием, предпринятым регионом для развития летнего туризма. Летний туризм в настоящее время в основном основан на велотуризме,
					поскольку мы находимся в центре этапов Тур де Франс.
				</p>
			</div>
			<div class="flex flex-col gap-y-[10px] text-[18px]">
				<p class="font-bold font-open-sans">
					Не знаете, какую недвижимость выбрать?
				</p>
				<p>
					Не беспокойтесь, все сдаваемые в аренду объекты недвижимости проходят строгий процесс отбора и предварительно проверяются нашей командой. Вместо того, чтобы
					сосредотачиваться на выборе отдельных объектов для инвестирования, свои инвестиции между несколькими доступными объектами недвижимости.
				</p>
			</div>
			<div class="flex flex-col gap-y-[10px] text-[18px]">
				<p class="font-bold font-open-sans">Смотреть объекты на карте</p>
				<img
					class="border border-gray-dashed px-[12px] py-[10px]"
					src={asset("/map.png")}
					alt=""
				/>
			</div>
		</div>
	);
}

function RightSection(data) {
	return (
		<div class="w-[510px] flex flex-col ">
			<div class="flex flex-col">
				<p class="font-bold font-open-sans text-[34px]">{data.name}</p>
				<p class="text-gray-main uppercase">Объект №{data.id}</p>
				<div class="flex gap-x-[4px]">
					<img src={asset("/location.svg")} />
					<p class="text-yellow-gold uppercase">Tivat 85320, Montenegro</p>
				</div>
			</div>
			<div class="flex mt-[32px] gap-x-[36px] text-[18px]">
				<div class="font-light">
					<p>Площадь объекта</p>
					<p>Тип объекта</p>
					<p>Начало строительства</p>
					<p>Окончание строительства</p>
				</div>
				<div>
					<p>{data.area} кв м</p>
					<p>апартаменты</p>
					{/* TODO: fix the dates */}
					<p>{data.buildBegins}</p>
					<p>{data.buildEnds}</p>
				</div>
			</div>
			<div class="flex mt-[24px] gap-x-[20px] text-[18px]">
				<div class="font-light">
					<p>Минимальная инвестиция:</p>
					<p>Максимальная инвестиция:</p>
					<p>Доходность</p>
				</div>
				<div>
					<p>€10,63</p>
					<p>€8 501</p>
					<p>12,4 %/год</p>
				</div>
			</div>
			<div class="flex flex-col mt-[40px] gap-y-[12px]">
				<div>
					<p class="uppercase text-gray-main">Цена</p>
					<p class="font-light text-[64px] leading-[75px]">{eur.format(data.objectPrice)}</p>
				</div>
				<div>
					<p class="uppercase text-gray-main">ТОКЕН цена</p>
					<p class="font-light text-orange text-[64px] leading-[75px]">{data.tokenPrice}</p>
				</div>
			</div>
			<button class="uppercase bg-orange mt-[24px] w-[360px] h-[64px]">
				Инвестировать
			</button>
			<p class="mt-[9px] w-[340px] text-[14px]">
				* этот проект будет профинансирован, если будет достигнута цель в размере 1 441 124,03 Евро. Если цель не будет достигнута, вам будет возвращено 100% ваших
				инвестиций.
			</p>
			<div class="w-[360px] mt-[166px] py-[44px] px-[24px] bg-gray-bg rounded-sm">
				<div class="bg-white pt-[24px] pl-[20px] pb-[40px] rounded-sm">
					<p class="font-open-sans text-[18px] font-bold">
						Связаться с персональным менеджером. <br />
						Это бесплатно.
					</p>
					<div class="flex gap-x-[8px] mt-[20px]">
						<button class="bg-green-3 w-[128px] h-[60px] flex justify-center items-center rounded-sm">
							<img src={asset("/phone.svg")} />
						</button>
						<button class="bg-blue-1 w-[128px] h-[60px] flex justify-center items-center rounded-sm">
							<img src={asset("/telegram.svg")} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
