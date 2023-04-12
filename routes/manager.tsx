import { asset } from "$fresh/runtime.ts";
import screenWrapper from "@/lib/screenWrapper.tsx";

export default function Manager() {
	return screenWrapper(
		<article class="w-full h-full bg-gray-light col md:row items-center gap-4 ">
			<div class="w-[90%] h-full md:w-1/2 col gap-4 justify-between ">
				<div class="w-full h-[65%] bg-white-dark rounded-sm">
					<ManagerSection />
				</div>
				<div class="w-full h-[32%] bg-white-dark rounded-sm">
					<ContactSection />
				</div>
			</div>
			<div class="w-[90%] h-full md:w-1/2 col gap-4">
				<div class="w-full h-[32%] bg-white-dark rounded-sm">
					<FaqSection />
				</div>
				<div class="w-full h-[65%] bg-white-dark rounded-sm">
					<AboutSection />
				</div>
			</div>
		</article>,
	);
}

function ManagerSection() {
	return (
		<section class="text-xs md:text-[1.1vw] p-4 md:pl-[2vw] md:py-[4vh]">
			<div class="row mb-4 gap-3 md:gap-[1vw]">
				<img
					src={asset("manager-ava.png")}
					class="w-[20vh] md:w-[24.3vh] rounded-sm object-contain"
				/>
				<div class="col justify-end gap-2 md:gap-[1.2vw]">
					<div class="col w-40 gap-2 md:gap-[2vh]">
						<h1 class="text-xl md:text-[1.7vw] md:leading-8 font-bold">
							Сергей Ольховский
						</h1>
						<p>Менеджер</p>
					</div>
					<div class="flex justify-start items-start gap-2">
						<img
							src={asset("phone.svg")}
							class="bg-green-btn w-24 rounded-lg w-[16vw] md:w-[5vw]"
						/>
						<img
							src={asset("telegram.svg")}
							class="bg-green-btn w-24 rounded-lg w-[16vw] md:w-[5vw]"
						/>
					</div>
				</div>
			</div>
			<div class="md:leading-[3vh] w-[93%]">
				<p>
					На рынке недвижимости Черногории с 2017 года. Курирует строительство объектов недвижимости страны, сопровождает сделки купли-продажи. Даст компетентную
					консультацию по любым вопросам инвестиций в криптовалюте.
				</p>
			</div>
		</section>
	);
}

function ContactSection() {
	return (
		<section class="w-[93%] row justify-between p-4 pr-1 md:pr-4 md:py-[4vh] md:pl-[2vw]  ">
			<div className="flex flex-col justify-start items-start w-2/3 gap-[0.5vw]">
				<h2 class="text-sm md:text-[1.3vw] font-bold mb-2.5">Контакты</h2>
				<div class="w-full text-[2.8vw] md:text-[0.9vw] row gap-3.5 md:uppercase">
					<div>
						<p>Телефон:</p>
						<p>Электронная почта:</p>
						<p>Адрес:</p>
					</div>
					<div>
						<p>123-456-7890</p>
						<p>info@tokenopolis.biz</p>
						<p>Черногория,</p>
						<p>г. Тиват,</p>
						<p>ул. Строителей, 8</p>
					</div>
				</div>
			</div>
			<img src={asset("contact-vector.svg")} class="w-[30%] md:w-[9vw]" />
		</section>
	);
}

function FaqSection() {
	return (
		<section class="col justify-center items-start gap-3 md:gap-[1vw] p-4 md:px-[2vw] md:py-[4vh]">
			<div class="w-full text-xs col gap-2 md:w-[80%] md:text-[1vw] md:leading-[2.5vh]">
				<p>
					Мы собрали большинство вопросов, которые задают наши клиенты на странице FAQ.
				</p>
				<p>
					Скорее всего ответ на интересующий вопрос уже подробно описан, проверьте, пожалуйста.
				</p>
			</div>
			<button class="flex justify-center items-center w-full h-[5vh] md:w-[35%] md:text-[1.5vw] border border-yellow-orange rounded-sm focus:outline-none">
				FAQ
			</button>
		</section>
	);
}

function AboutSection() {
	return (
		<section class="p-4 md:pl-[2vw] md:px-[1vw] md:py-[3.5vh] h-full">
			<div class="w-full md:w-[88%] col gap-2 md:gap-[0.5vw] text-[2.8vw] md:text-[0.9vw] md:leading-[2.5vh]">
				<h2 class="text-sm md:text-[1.3vw] font-bold">О компании</h2>
				<p class="hidden md:inline">
					Компания активно развивается и ежегодно увеличивает прибыль.
				</p>
				<p>
					Мы стремимся обеспечить нашим клиентам выгодное и безопасное инвестирование с помощью использования современных технологий и прозрачной системы учета.
				</p>
				<p>
					Максимально учитываем интересы и пожелания наших инвесторов, чтобы сделать совместную работу максимально выгодной и продуктивной.
				</p>
			</div>
			<h3 class="text-[3.1vw] md:text-[0.9vw] font-bold my-[1vh]">
				Направление деятельности
			</h3>
			<div class="flex items-start justify-start gap-3 md:gap-[1vw] w-[97%] md:p-[0.7vw] md:w-[26vw] bg-gray-light rounded p-3">
				<img
					src={asset("rectangle.png")}
					class="object-contain h-[34vw] md:h-[17vh] rounded-sm"
				/>
				<div class="text-[2.8vw] md:text-[0.8vw] md:leading-[2vh] w-1/2">
					<p>
						Инфраструктурные проекты. Работы по прокладке инженерных коммуникация и сетей (свет, водопровод, канализация, дороги), строительство и монтаж септиков,
						ливнёвок.
					</p>
				</div>
			</div>
		</section>
	);
}
