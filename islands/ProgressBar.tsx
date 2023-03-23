import { useState } from "preact/hooks";

export default function ProgressBarComponent() {
	const [percent, setPercent] = useState(35);

	return (
		<div class="w-[19vw] col items-center text-black bg-white">
			<div class="w-[73%] h-[62%] mt-[76px] py-12 col justify-between items-center mt-[76px] border-y border-gray-dashed">
				<span class="w-[48%] text-center font-bold text-lg">{`Ваш профиль заполнен на ${percent}%`}</span>
				<ProgressBar percent={percent} />
			</div>
		</div>
	);
}

function ProgressBar({ percent }: { percent: number }) {
	let styleProgressBar: string = `w-[${percent}%] bg-yellow-btn rounded-r-lg `;
	percent === 100 ? styleProgressBar += "rounded-l-lg" : !!percent && (styleProgressBar += "border-l-1 border-gray-main");

	return (
		<div class="w-[57%] h-9 flex flex-row-reverse relative border border-solid border-gray-main rounded-lg">
			<div class={styleProgressBar}></div>
			<span class="absolute right-7 top-1.5 text-sm">{`${percent}%`}</span>
		</div>
	);
}
