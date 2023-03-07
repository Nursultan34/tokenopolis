import { asset } from "$fresh/runtime.ts";

export default function Faq() {
	return (
		<div class="bg(gray-fon) row w-full h-full text(black) py-[42px] pl-[60px]">
			<FirstSection />
			<div class="col gap-6">
				<SecondSection />
				<ThirdSection />
			</div>
		</div>
	);
}

function FirstSection() {
	const questions = [
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Как инвестировать через личный кабинет?",
			answer: "",
		},
		{
			title: "Как выбрать подходящий объект?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer: "",
		},
	];
	return (
		<div class="bg(white) w-[728px] h-[898px] rounded mr-[20px] shadow-lg shadow-black/15">
			<h2 class="font-bold text-2xl pt-10 pl-9">Частые вопросы</h2>
			<div class="col items-start w-[702px] mt-2 ml-[26px] ">
				<div class="col items-start gap-3 w-[692px] h-[790px] overflow-y-scroll p-[10px]">
					{questions.map((question) => (
						<div class="bg(gray-white) w-[654px] h-[76px] rounded">
							<div class="row justify-between p-7 pr-8">
								<h3 class="font-bold text-lg">{question.title}</h3>
								<img src={asset("cross.svg")} class="w-[20px]" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function SecondSection() {
	return (
		<div class="bg(white) w-[732px] h-[270px] rounded relative shadow-lg shadow-black/15">
			<div class="w-[517px] h-[190px] py-10 pl-9 text-lg">
				<p class="mb-[17px]">
					Мы собрали большинство вопросов, которые задают наши клиенты. Но если вы не нашли ответ на свой вопрос, напишите нам по адресу:{" "}
					<span class="font-bold underline">info@tokenopolis.biz</span>
				</p>
				<p class="mb-[11px]">Либо обратитесь к вашему менеджеру</p>
				<button class="w-[240px] h-[48px] px-[20px] py-[15px] bg(yellow-btn) rounded-lg text-sm uppercase">
					задать вопрос
				</button>
			</div>
			<img
				src={asset("contact-vector.svg")}
				class="w-[183px] h-[190px] absolute right-9 top-10"
			/>
		</div>
	);
}

function ThirdSection() {
	const articles = [
		{
			title: "Что такое токены? для чего они нужны и какие токены бывают?",
			img: "plug.png",
			href: "",
		},
		{
			title: "Как инвестировать через личный кабинет?",
			img: "plug.png",
			href: "",
		},
		{
			title: "Как инвестировать через личный кабинет?",
			img: "plug.png",
			href: "",
		},
		{
			title: "Как выбрать подходящий объект?",
			img: "plug.png",
			href: "",
		},
		{
			title: "Что такое токены? для чего они нужны и какие токены бывают?",
			img: "plug.png",
			href: "",
		},
	];
	return (
		<div class="bg(white) w-[732px] h-[604px] shadow-lg shadow-black/15">
			<div class="w-[668px] h-[520px] pt-10 pl-[28px] pb-[44px] pr-9">
				<h2 class="text-2xl font-bold mb-[22px]">Обучающие статьи</h2>
				<div class="w-[668px] h-[472px] col gap-2 overflow-y-scroll">
					{articles.map((article) => (
						<a href={article.href}>
							<div class="w-[634px] h-[112px] border rounded border-[#D1D1D1] row items-center justify-start">
								<img
									src={asset(article.img)}
									class="px-2 pl-2 pr-[20px]"
								/>
								<p class="w-[353px] h-[44px] uppercase mr-[56px]">
									{article.title}
								</p>
								<img src={asset("arrow-article.svg")} />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
