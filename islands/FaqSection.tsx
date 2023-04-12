import { useReducer } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";

export default function FaqSection() {
	const [active, setActive] = useReducer((c, n) => n == c ? null : n, null);

	const questions = [
		{
			title: "Что такое токены и для чего они нужны?",
			answer:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime veritatis minima illum voluptas ad optio quo facilis doloremque aspernatur ducimus, eveniet ex iure quia delectus et, distinctio rerum nemo possimus. Illo fugit ratione unde in animi deleniti quam ipsam iusto minima blanditiis rem, dolore sapiente ad quod, magni labore pariatur alias exercitationem, consectetur praesentium voluptatem modi odit. Consequatur quasi, modi et quae eveniet magni voluptatibus tempore repudiandae officia assumenda perferendis dolores quo facere aspernatur mollitia tempora numquam nam doloribus unde accusantium, nisi consectetur? Sint nam sunt vero iste est labore quod accusamus commodi esse odit mollitia atque, a eveniet!",
		},
		{
			title: "Как инвестировать через личный кабинет?",
			answer:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime veritatis minima illum voluptas ad optio quo facilis doloremque aspernatur ducimus, eveniet ex iure quia delectus et, distinctio rerum nemo possimus. Illo fugit ratione unde in animi deleniti quam ipsam iusto minima blanditiis rem, dolore sapiente ad quod, magni labore pariatur alias exercitationem, consectetur praesentium voluptatem modi odit. Consequatur quasi, modi et quae eveniet magni voluptatibus tempore repudiandae!",
		},
		{
			title: "Как выбрать подходящий объект?",
			answer:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime veritatis minima illum voluptas ad optio quo facilis doloremque aspernatur ducimus, eveniet ex iure quia delectus et, distinctio rerum nemo possimus. Illo fugit ratione unde in animi deleniti quam ipsam iusto minima blanditiis rem, dolore sapiente ad quod, magni labore pariatur alias exercitationem, consectetur praesentium voluptatem modi odit. Consequatur quasi, modi et quae eveniet magni voluptatibus tempore repudiandae officia assumenda perferendis dolores quo facere aspernatur mollitia tempora numquam nam doloribus unde accusantium, nisi consectetur? Sint nam sunt vero iste est labore quod accusamus commodi esse odit mollitia atque, a eveniet!",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime veritatis minima illum voluptas ad optio quo facilis doloremque aspernatur ducimus, eveniet ex iure quia delectus et, distinctio rerum nemo possimus. Illo fugit ratione unde in animi deleniti quam ipsam iusto minima blanditiis rem, dolore sapiente ad quod, magni labore pariatur alias exercitationem, consectetur praesentium voluptatem modi odit. Consequatur quasi, modi et quae eveniet magni voluptatibus tempore repudiandae officia assumenda perferendis dolores quo facere aspernatur mollitia tempora numquam nam doloribus unde accusantium, nisi consectetur? Sint nam sunt vero iste est labore quod accusamus commodi esse odit mollitia atque, a eveniet!",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime veritatis minima illum voluptas ad optio quo facilis doloremque aspernatur ducimus, eveniet ex iure quia delectus et, distinctio rerum nemo possimus. Illo fugit ratione unde in animi deleniti quam ipsam iusto minima blanditiis rem, dolore sapiente ad quod, magni labore pariatur alias exercitationem, consectetur praesentium voluptatem modi odit. Consequatur quasi, modi et quae eveniet magni voluptatibus tempore repudiandae officia assumenda perferendis dolores quo facere aspernatur mollitia tempora numquam nam doloribus unde accusantium, nisi consectetur? Sint nam sunt vero iste est labore quod accusamus commodi esse odit mollitia atque, a eveniet!",
		},
		{
			title: "Что такое токены и для чего они нужны?",
			answer:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime veritatis minima illum voluptas ad optio quo facilis doloremque aspernatur ducimus, eveniet ex iure quia delectus et, distinctio rerum nemo possimus. Illo fugit ratione unde in animi deleniti quam ipsam iusto minima blanditiis rem, dolore sapiente ad quod, magni labore pariatur alias exercitationem, consectetur praesentium voluptatem modi odit. Consequatur quasi, modi et quae eveniet magni voluptatibus tempore repudiandae officia assumenda perferendis dolores quo facere aspernatur mollitia tempora numquam nam doloribus unde accusantium, nisi consectetur? Sint nam sunt vero iste est labore quod accusamus commodi esse odit mollitia atque, a eveniet!",
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
		<section class="col gap-[1.5vh] py-[1.4vh] pl-[2.5vw] md:pt-[2vh] md:pl-[1.5vw]">
			<h2 class="text-[1.3vw] font-bold hidden md:inline">Частые вопросы</h2>
			<h2 class="text-sm font-bold md:hidden">FAQ</h2>
			<div class="mr-2 md:mr-3">
				<div class="w-full h-[50vh] md:h-[73vh] col items-start gap-[1vh] overflow-y-scroll scrollbar">
					{questions.map((question, index) => (
						<Question
							title={question.title}
							answer={question.answer}
							isActive={active == index}
							toggleActive={() => setActive(index)}
							questionIndex={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function Question({ title, answer, isActive, toggleActive, questionIndex }) {
	return (
		<div class={`bg-gray-light w-[98%] py-[3vh] px-4 md:px-8 rounded cursor-pointer transition-height ${isActive ? "max-h-screen" : "max-h-16"}`} onClick={toggleActive}>
			<div class="row justify-between items-center">
				<h3 class="text-xs md:text-[1.1vw] font-bold">
					{title}
				</h3>
				<img
					src={asset("cross.svg")}
					class="w-3 md:w-[1.3vw] select-none"
				/>
			</div>
			<p class={`mt-2 text-xs md:text-[0.9vw] transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}>
				{answer}
			</p>
		</div>
	);
}
