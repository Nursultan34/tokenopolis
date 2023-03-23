import { asset } from "$fresh/runtime.ts";

export default function MySetting() {
	const today: Date = new Date();
	const dateFormat: string[] = [today.toLocaleDateString("en-US"), today.toLocaleString("en-US")];
	const languages: string[] = ["en", "ru", "fr", "de"];
	const timeZone: string[] = [today.getTimezoneOffset().toString()];

	return (
		<div class="w-[21vw] pt-9 pb-16 col pl-9 justify-between text-xs text-black bg-white">
			<div class="col">
				<span class="text-darkGray text-2xl font-bold">Мои настройки</span>
				<span class="mt-4">Тема</span>
				<div class="w-[77%] row flex-wrap justify-between">
					<div class="w-[132px] row justify-between items-center rounded-sm bg-gray-white  mt-1 px-4 py-[5px] cursor-pointer">
						<img class="w-[38px]" src={asset("/profile/sun.svg")} alt="sun" />
						<span class="text-gray-main text-xs">СВЕТЛАЯ</span>
					</div>
					<div class="w-[132px] row justify-between items-center rounded-sm bg-gray-white  mt-1 px-4 py-[10px] cursor-pointer">
						<img class="w-[33px]" src={asset("/profile/moon.svg")} alt="moon" />
						<span class="text-darkGray text-xs">ТЁМНАЯ</span>
					</div>
				</div>
			</div>
			<form action="" class="col relative w-[79%]">
				<img class="absolute right-0 top-6 cursor-pointer" src={asset("/profile/edit.svg")} alt="icon" />
				<span class="text-xs mt-7">ФОРМАТ ДАТЫ*</span>
				<select class="py-[5%] profile-selin mt-3" name="" id="">
					{dateFormat.map((format) => <option>{format}</option>)}
				</select>
				<span class="mt-3 text-xs">ЧАСОВОЙ ПОЯС</span>
				<select class="py-[5%] profile-selin mt-0.5" name="" id="">
					{timeZone.map((zone) => <option>{zone}</option>)}
				</select>
				<span class="mt-3 text-xs">ЯЗЫК</span>
				<select class="py-[5%] profile-selin mt-0.5" name="" id="">
					{languages.map((language) => <option>{language}</option>)}
				</select>
			</form>
		</div>
	);
}
