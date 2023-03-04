import { asset } from "$fresh/runtime.ts";
import { tw } from "twind";

export default function Manager() {
	return (
		<div class="flex gap-5 bg(gray-fon) w-full h-full text-black pb-[44px]">
			<div class="col gap-[20px] w-[732px] h-[894px] ml-[60px] mt-10">
				<FirstSection />
				<SecondSection />
			</div>
			<div class="col gap-[20px] mt-10">
				<ThirdSection />
				<FourthSection />
			</div>
		</div>
	);
}

function FirstSection() {
	return (
		<div class="bg(white) w-[732px] h-[578px] rounded-sm shadow-lg shadow-black/15 py-10 px-[60px]">
			<div class="col gap-6 w-[619px] h-[490px] ">
				<div class="row w-[619px] h-[359px] gap-6">
					<div class="w-[280px] h-[359px] rounded-sm">
						<img src={asset("manager-ava.png")} class="object-contain" />
					</div>

					<div class="col items-start mt-[145px]">
						<div class="col w-[297px] h-[105px] gap-3">
							<h1 class="text-4xl font-bold">Сергей Ольховский</h1>
							<p class="text-lg">Менеджер</p>
						</div>

						<div class="flex justify-end items-start w-[188px] h-[60px] gap-2 mt-[50px]">
							<div class="bg(green-btn) w-[90px] h-[60px] flex justify-center items-center rounded-lg">
								<img src={asset("phone.svg")} />
							</div>
							<div class="bg(blue-btn) w-[90px] h-[60px] flex justify-center items-center rounded-lg">
								<img src={asset("telegram.svg")} />
							</div>
						</div>
					</div>
				</div>

				<div class="w-[601px] h-[105px] text-lg ">
					<p>
						На рынке недвижимости Черногории с 2010 года. Курирует строительство объектов недвижимости страны, сопровождает сделки купли-продажи.
					</p>
				</div>
			</div>
		</div>
	);
}

function SecondSection() {
	return (
		<div class="w-[728px] h-[300px] bg(white) rounded-sm shadow-lg shadow-black/15 relative">
			<div class="w-[454px] h-[166px] pt-[44px] pl-[60px]">
				<h2 class="text-2xl font-bold mb-[10px]">Контакты</h2>
				<div class="w-[454px] h-[130px] row gap-[15px] uppercase text-sm leading-[160%]">
					<div class="w-[166px] h-[105px] ">
						<p>Телефон:</p>
						<p>Электронная почта:</p>
						<p>Адрес:</p>
					</div>
					<div class="w-[273px] h-[130px]">
						<p>123-456-7890</p>
						<p>info@tokenopolis.biz</p>
						<p>Черногория,</p>
						<p>г. Тиват,</p>
						<p>ул. Строителей, 8</p>
					</div>
				</div>
			</div>
			<img
				src={asset("contact-vector.svg")}
				class="w-[204px] h-[212px] absolute right-[68px] top-[44px]"
			/>
		</div>
	);
}

function ThirdSection() {
	return (
		<div class="bg(white) w-[732px] h-[296px] rounded-sm shadow-lg shadow-black/15 px-9 py-10">
			<div class="col justify-center items-start gap-4">
				<div class="text-lg w-[644px] h-[120px]">
					<p>
						Мы собрали большинство вопросов, которые задают наши клиенты на странице FAQ.
					</p>
					<p>
						Прежде, чем писать менеджеру, проверьте, нет ли ответа на интересующий вас вопрос на странице с часто задаваемыми вопросами.
					</p>
				</div>
				<button class="bg(yellow-btn) w-72 h-14 text-4xl flex justify-center items-center rounded-lg px-5 py-4">
					FAQ
				</button>
			</div>
		</div>
	);
}

function FourthSection() {
	return (
		<div class="w-[732px] h-[580px] bg(white) rounded-sm shadow-lg shadow-black/15">
			<div class="col gap-[20px] w-[657px] h-[192px] ml-9 mr-[39px] mt-[28px] mb-[11px]">
				<h2 class="text-2xl font-bold">О компании</h2>
				<p>
					Мы стремимся обеспечить нашим клиентам выгодное и безопасное инвестирование с помощью использования современных технологий и прозрачной системы учета.
				</p>
				<p>
					Максимально учитываем интересы и пожелания наших инвесторов, чтобы сделать совместную работу максимально выгодной и продуктивной.
				</p>
			</div>

			<h3 class="text-lg font-bold ml-[36px] mb-[20px]">
				Направление деятельности
			</h3>
			<div class="flex items-center justify-center">
				<div class="w-[40px] h-[80px] flex items-center justify-center">
					<img src={asset("arrow-left.svg")} />
				</div>

				<div class="flex w-[508px] h-[273px] border border-[#B8B8B7] rounded">
					<div class="w-[198px] h-[189px] rounded mx-[24px] my-[42px]">
						<img src={asset("rectangle.png")} class="object-contain" />
					</div>
					<p class="w-[237px] h-[157px] mt-[42px] mr-[25px]">
						Инфраструктурные проекты. Работы по прокладке инженерных коммуникаций и сетей (свет, водопровод, канализация, дороги), строительство и монтаж септиков,
						ливнёвок.
					</p>
				</div>

				<div class="w-[40px] h-[80px] flex items-center justify-center">
					<img src={asset("arrow-right.svg")} />
				</div>
			</div>
		</div>
	);
}
