import { asset } from "$fresh/runtime.ts";
import screenWrapper from "@/lib/screenWrapper.tsx";

export default function Faq() {
	return screenWrapper(
		<article class="row gap-5 w-full h-full text(black) py-10 pl-[60px]">
			<FirstSection />
			<div class="col gap-6 h-full w-[43%]">
				<SecondSection />
				<ThirdSection />
			</div>
		</article>,
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
		<div class="bg(white-dark) w-[43%] h-full rounded shadow-lg shadow-black/15">
			<h2 class="font-bold text-2xl pt-10 pl-9">Частые вопросы</h2>
			<div class="col items-start mt-2 ml-6 h-full">
				<div class="col items-start gap-3 w-full h-[88%] overflow-y-scroll p-2.5">
					{questions.map((question) => (
						<div class="bg(gray-light) w-[95%] rounded">
							<div class="row justify-between p-7 pr-8">
								<h3 class="font-bold text-lg">{question.title}</h3>
								<img src={asset("/cross.svg")} class="w-[20px]" />
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
		<div class="bg(white-dark) w-full h-full rounded relative shadow-lg shadow-black/15">
			<div class="w-[75%] h-48 py-10 pl-9 text-lg relative z-10">
				<p class="mb-4">
					Мы собрали большинство вопросов, которые задают наши клиенты. Но если вы не нашли ответ на свой вопрос, напишите нам по адресу:{" "}
					<span class="font-bold underline">info@tokenopolis.biz</span>
				</p>
				<p class="mb-2.5">Либо обратитесь к вашему менеджеру</p>
				<button class="w-60 h-12 px-5 py-4 bg(yellow-orange) rounded-lg text-sm uppercase focus:outline-none">
					задать вопрос
				</button>
			</div>
			<img
				src={asset("/contact-vector.svg")}
				class="w-[25%] absolute right-9 top-10"
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
		<div class="bg(white-dark) w-full h-[66%] shadow-lg shadow-black/15">
			<div class="w-full h-full pt-10 pl-7 pb-11 pr-9">
				<h2 class="text-2xl font-bold mb-6">Обучающие статьи</h2>
				<div class="w-full h-[93%] col gap-2 overflow-y-scroll">
					{articles.map((article) => (
						<a href={article.href}>
							<div class="w-[93%] h-[118%] border rounded border-[#D1D1D1] row items-center justify-start">
								<img src={asset(article.img)} class="px-2 pl-2 pr-5" />
								<p class="w-[56%] uppercase mr-14">{article.title}</p>
								<img src={asset("/arrow-article.svg")} />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
