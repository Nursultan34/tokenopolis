import { asset } from "$fresh/runtime.ts";
import FaqSection from "@/islands/FaqSection.tsx";
import screenWrapper from "@/lib/screenWrapper.tsx";

export default function Faq() {
	return screenWrapper(
		<article class="w-full h-full bg-gray-light col items-center md:row md:items-start gap-4">
			<div class="w-[90%] h-full md:w-1/2 bg-white-dark rounded-sm">
				<FaqSection />
			</div>
			<div class="w-[90%] h-full md:w-1/2 col gap-4 md:gap-0">
				<div class="bg-white-dark w-full h-[32%] rounded-sm">
					<InfoSection />
				</div>
				<div class="w-full h-[3%] hidden md:block"></div>
				<div class="bg-white-dark w-full h-[65%] rounded-sm">
					<ArticlesSection />
				</div>
			</div>
		</article>,
	);
}

function InfoSection() {
	return (
		<section class="row justify-around md:gap-[4vw] py-[2vh] md:py-[3vh]">
			<div class="col justify-center gap-[2vh] w-[90%] md:w-[50%] text-sm md:text-[1vw]">
				<p class="md:w-[140%]">
					Мы собрали большинство вопросов, которые задают наши клиенты. Но если вы не нашли ответ на свой вопрос, напишите нам по адресу:{" "}
					<span class="font-bold underline">info@tokenopolis.biz</span>
				</p>
				<p>Либо обратитесь к вашему менеджеру</p>
				<button
					onClick={() => {}}
					class="w-full h-[5vh] md:w-[14vw] px-[0.5vw] py-[0.5vh] text-sm md:text-[0.9vw] bg-yellow-orange rounded-lg uppercase focus:outline-none"
				>
					задать вопрос
				</button>
			</div>
			<img
				src={asset("contact-vector.svg")}
				class="w-[19vh] hidden md:inline"
			/>
		</section>
	);
}

function ArticlesSection() {
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
		{
			title: "Что такое токены? для чего они нужны и какие токены бывают?",
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
		<section class="col gap-2 md:gap-[2vh] py-[1.4vh] pl-[2.5vw] md:py-[3vh] md:pl-[1.5vw]">
			<h2 class="text-sm md:text-[1.3vw] font-bold">Обучающие статьи</h2>
			<div class="mr-2 md:mr-3">
				<div class="w-full h-[44vh] col gap-[1vh] overflow-y-scroll scrollbar">
					{articles.map((article) => (
						<a href={article.href}>
							<div class="w-[98%] row items-center justify-start bg-gray-light rounded">
								<img
									src={asset(article.img)}
									class="w-[20%] m-[1.5vw] md:w-[13%] md:m-[0.5vw]"
								/>
								<p class="text-xs md:text-[1vw] md:leading-7 w-[56%] md:uppercase mr-[6vw]">
									{article.title}
								</p>
								<img
									src={asset("arrow-article.svg")}
									class="w-[5vw] md:w-[2vw]"
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
