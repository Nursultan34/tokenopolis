import { asset } from "$fresh/runtime.ts";
import { useRef, useState, useEffect } from "preact/hooks";

export interface IPersonFirstData {
	img: string;
	firstName: string;
	lastName: string;
}

export interface IPersonSecondData {
	birthday: string;
	registrationDay: string;
	email: string;
	extraEmail: string;
	phoneNumber: string;
	extraPhoneNumber: string;
	country: string;
	city: string;
}

export interface IPersonData {
	personFirstData: IPersonFirstData;
	personSecondData: IPersonSecondData;
	about: string;
}

export default function MyProfile() {
	const personData = {
		pfp: "/pfp.png",
		firstName: "Никита Решетеев",
		lastName: "Resheteev",
		birthday: "15.05.1995",
		city: "Москва",
		country: "Россия",
		email: "nikita.resheteev@gmail.com",
		extraEmail: "resheteev@yandex.ru",
		extraPhoneNumber: "955 987-65-43",
		phoneNumber: "922 123-45-67",
		registrationDay: "02.02.2023",
		about: "В меру упитанный мужчина в самом расцвете сил.",
	}

	return (
		<div class="w-[39vw] col justify-between px-[56px] pt-[42px] pb-[80px] bg-white text-darkGray">
			<div class="col">
				<span class="text-2xl font-bold">Мой профиль</span>
				<span class="text-sm">Личная информация</span>
				<PersonPhoto img={personData.pfp} firstName={personData.firstName} lastName={personData.lastName} />
			</div>
			<PersonInfo />
			<div class="relative col">
				<span class="text-xs">О СЕБЕ</span>
				<span class="ml-4 mt-2 pr-6 text-lg overflow-auto">{personData.about}</span>
				<img class="absolute bottom-0 right-0 cursor-pointer" src={asset("/profile/edit.svg")} />
			</div>
		</div>
	);
}

function PersonPhoto({ img, firstName, lastName }) {
	return (
		<div class="row mt-5 items-center">
			<div class="relative w-[210px]">
				<img class="rounded-full" src={asset(img)} />
				<img class="absolute bottom-3 right-0 cursor-pointer" src={asset("/profile/frame.svg")} />
			</div>
			<div class="col ml-9">
				<span class="text-4xl font-bold">{firstName}</span>
				<span class="text-2xl font-bold mt-3">{lastName}</span>
			</div>
		</div>
	);
}

function PersonInfo() {
	const labelArray: string[] = [
		"ДАТА РОЖДЕНИЯ",
		"ДАТА РЕГИСТРАЦИИ",
		"ЭЛЕКТРОННАЯ ПОЧТА",
		"ДОПОЛНИТЕЛЬНАЯ ЭЛЕКТРОННАЯ ПОЧТА",
		"ТЕЛЕФОН",
		"ДПОЛНИТЕЛЬНЫЙ ТЕЛЕФОН",
		"СТРАНА",
		"ГОРОД",
	];
	const cities = {
		"Россия": ["Москва", "Екатеринбург", "Санкт-Петербург"],
		"Черногория": ["Подгорица", "Будва"],
		"Палестина": ["Газа", "Рамала"],
	}

	const [activeCountry, setActiveCountry] = useState("Россия");

	return (
		// Use TailwindCSS classes for this
		<div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, auto))", justifyContent: "space-between", rowGap: "0.5rem" }}>
			{labelArray.map((label, index) => {
				if (index <= 1) {
					return (
						<div class="col">
							<span class="text-xs">{label}</span>
							<input class="profile-selin" type="date" />
						</div>
					);
				} else if (index <= 5) {
					return (
						<div class="col">
							<span class="text-xs">{label}</span>
							<input class="profile-selin" type="text" />
						</div>
					);
				} else if (index == 6) {
					return (
						<div class="col">
							<span class="text-xs">{label}</span>
							<select onChange={ev => setActiveCountry(ev.target?.value)}
									value={activeCountry}
									name="country"
									class="profile-selin">
								{Object.keys(cities).map(county => <option>{county}</option>)}
							</select>
						</div>
					);
				} else {
					return (
						<div class="col">
							<span class="text-xs">{label}</span>
							<select class="profile-selin">
								{cities[activeCountry].map(city => <option>{city}</option>)}
							</select>
						</div>
					);
				}
			})}
		</div>
	);
}
