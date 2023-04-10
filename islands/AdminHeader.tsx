import { asset } from "$fresh/runtime.ts";
import { boolState, match } from "#/utils.ts";
import { useEffect, useReducer } from "preact/hooks";
import { popUp } from "#/utils.ts";

export default function AdminHeader() {
	const [isDark, toggleTheme] = useReducer((dark: boolean, _) => {
		const newTheme = !dark;
		localStorage.setItem("dark", newTheme.toString());
		return newTheme;
	}, localStorage.getItem("dark") != "false");
	useEffect(() => setHtmlDark(isDark), [isDark]);

	return (
		<header class="header z-50">
			<div class="center w-36">
				<img src={asset("/headerImage/LogoIcon.png")} class="w-11 h-12" />
			</div>
			<div class="row items-center justify-end w-max">
				<div class="row center mr-4">
					<Button name="Добавить токен"  onClick={() => popUp(<TokenView />)} />
					<Button name="Добавить объект" onClick={() => popUp(<ModalView />)} />
					<div class="center w-14 h-14 mr-3 rounded-full border border-gray-bg">
						<img src={asset("/headerImage/EllipseImage.png")} class="w-[48px] h-[48px]"/>
					</div>
					<text class="font-medium mr-3">Nikita Resheteev</text>
					<div class="mr-7 center children:(w-11 h-11 mr-3 hover:opacity-70)">
						<img src={asset("/headerImage/Account.png")}
							 onClick={() => popUp(<SettingsPopUp isDark={isDark} toggleTheme={toggleTheme} />)} />
						<img src={asset("/headerImage/Message.png")}
						     onClick={() => popUp(<NotificationsPopUp />)} />
					</div>
				</div>
			</div>
		</header>
	);
}

// FIXME
// literally the hell
function SettingsPopUp({ isDark, toggleTheme }) {
	const [displayLangMenu, toggleLangMenu] = boolState();
	return (
		<div
			class="bg-white-dark absolute z-20 right-4 top-24"
			style={{ width: 320, height: 417 }}
		>
			<div
				class="bg-gray-light mt-6 ml-4 flex flex-col justify-start items-center"
				style={{ width: 288, height: 372 }}
			>
				<div class="w-full h-1/2 mt-6">
					<div
						class="w-full flex flex-row justify-center items-center h-1/3"
						style={{ display: "flex", flex: 1 }}
					>
						{displayLangMenu
							? (
								<>
									<button
										class={`border flex flex-row justify-end items-center rounded-sm bg-yellow-light border-gray-dashed rounded-sm focus:outline-none`}
										style={{ width: 260, height: 54 }}
										onClick={toggleLangMenu}
									>
										<text class="mr-4 flex flex-row justify-center items-center font-light">
											<img
												class="mr-3"
												src={asset("/headerImage/Vector.png")}
												style={{ width: 7.1, height: 15.84 }}
											/>{" "}
											ВЫБРАТЬ ЯЗЫК
										</text>
										<img
											class="mr-3.5"
											src={asset("/headerImage/translate.png")}
											style={{ width: 25.08, height: 25.08 }}
										/>
									</button>
									<div
										class="bg-white-dark absolute right-[calc(20.3rem)] flex justify-center items-center"
										style={{ width: 164, height: 174 }}
									>
										<div
											style={{ width: 140, height: 134 }}
											class="flex flex-col justify-center items-center rounded-sm"
										>
											<div
												class="flex border border-gray-light flex-auto bg-gray-light justify-center items-center hover:border-gray-cool"
												style={{ width: 140, height: 42 }}
											>
												английский
											</div>
											<div
												class="flex border border-gray-light flex-auto bg-gray-light justify-center items-center mt-1 hover:border-gray-cool"
												style={{ width: 140, height: 42 }}
											>
												украинский
											</div>
											<div
												class="flex border border-gray-light flex-auto bg-gray-light justify-center items-center mt-1 hover:border-gray-cool"
												style={{ width: 140, height: 42 }}
											>
												русский
											</div>
										</div>
									</div>
								</>
							)
							: (
								<button
									class={`border border-white-dark flex flex-row justify-end items-center bg-white-dark rounded-sm hover:bg-yellow-light hover:border-yellow-light rounded-sm focus:outline-none`}
									style={{ width: 260, height: 54 }}
									onClick={toggleLangMenu}
								>
									<text class="mr-4 flex flex-row justify-center items-center font-light">
										ВЫБРАТЬ ЯЗЫК
									</text>
									<img
										class="mr-3.5"
										src={asset("/headerImage/translate.png")}
										style={{ width: 25.08, height: 25.08 }}
									/>
								</button>
							)}
					</div>
					<div
						class="flex w-full justify-center items-center h-1/3"
						style={{ display: "flex", flex: 1 }}
					>
						<div
							class="flex flex-row bg-white-dark border border-white-dark justify-end items-center hover:bg-yellow-light hover:border-yellow-light rounded-sm"
							style={{ width: 260, height: 54 }}
						>
							<text class="mr-4 flex flex-row justify-center items-center text-xl font-light">
								Профиль
							</text>
							<img
								class="mr-3.5"
								src={asset("/headerImage/profilecircle.png")}
								style={{ width: 28, height: 27 }}
							/>
						</div>
					</div>
					<div
						class="flex w-full justify-center items-center h-1/3 pl-3.5 pr-3.5"
						style={{ display: "flex", flex: 1 }}
					>
						<div
							class={`flex flex-row bg-white-dark border border-white-dark justify-end items-center hover:bg-yellow-light hover:border-yellow-light rounded-sm ${
								!isDark ? "bg-yellow-light border border-yellow-light" : "bg-white"
							}`}
							style={{ width: 132, height: 48 }}
							onClick={() => (isDark ? toggleTheme() : null)}
						>
							<img
								class="mr-3.5"
								src={asset("/headerImage/sun.png")}
								style={{ width: 38, height: 38 }}
							/>
							<text class="mr-4 flex flex-row justify-center items-center text-xs font-light">
								Светлая
							</text>
						</div>
						<div
							class={`flex flex-row bg-white-dark ml-2 border border-white-dark justify-end items-center hover:bg-violet border hover:border-violet rounded-sm ${
								isDark ? "bg-violet border border-violet" : "bg-white"
							}`}
							style={{ width: 132, height: 48 }}
							onClick={() => (isDark ? null : toggleTheme())}
						>
							<img
								class="mr-3.5"
								src={asset("/headerImage/moon.png")}
								style={{ width: 33, height: 28 }}
							/>
							<text class="mr-4 flex flex-row justify-center items-center text-xs font-light">
								Темная
							</text>
						</div>
					</div>
					<div
						class="flex w-full flex-row justify-center items-center justify-center items-center h-1/3"
						style={{ display: "flex", flex: 1 }}
					>
						<div
							class="flex flex-row justify-end items-center border border-white-dark bg-white-dark hover:bg-yellow-light hover:border-yellow-light"
							style={{ width: 260, height: 54 }}
						>
							<div class="mr-4 text-xl font-light">Выход</div>
							<img
								class="mr-3.5"
								src={asset("/headerImage/logout.png")}
								style={{ width: 26, height: 26 }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function NotificationsPopUp() {
	return (
		<div
			class="bg-white-dark absolute z-20 right-4 top-24 flex justify-center items-center"
			style={{ width: 320, height: 541 }}
		>
			<div
				class="bg-gray-light"
				style={{
					width: 287,
					height: 499,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						display: "flex",
						flex: 0.7,
						justifyContent: "space-between",
						alignItems: "center",
						padding: 16,
					}}
				>
					<text class="font-medium text-lg">Уведомление</text>
					<img
						style={{ width: 26, height: 26 }}
						src={asset("/headerImage/MessageTwo.png")}
					/>
				</div>
				<div style={{ width: 255, height: 1 }} class="bg-gray-dashed ml-4" />
				<div style={{ display: "flex", flex: 3, padding: 20 }}>
					В настоящее время уведомлений нет. Мы сообщим как только появится что-то интересное!
				</div>
				<div
					style={{ width: 255, height: 1 }}
					class="bg-gray-dashed ml-4 -mt-40"
				/>
				<div style={{ display: "flex", flex: 3 }}></div>
			</div>
		</div>
	);
}

function setHtmlDark(dark: boolean) {
	if (dark) {
		document.getElementsByTagName("html")[0].classList.add("dark");
	} else {
		document.getElementsByTagName("html")[0].classList.remove("dark");
	}
}

function Button({ name, onClick }: { name: string; onClick: () => void }) {
	return (
		<button class="bg-yellow-orange w-60 h-12 mr-5 active:bg-yellow-orange focus:bg-yellow-orange" onClick={onClick}>
			{name}
		</button>
	);
}

const ModalView = () => {
	return (
		<div class="bg-white-light w-[50rem] h-[45rem] mt-24 flex flex-none flex-col items-center overflow-scroll" onClick={(event)=> event.stopPropagation()}>
			<div class="w-[600px] h-[378px] bg-gray-light border border-gray-dashed rounded mt-16">
				<AddImageComponent/>
			</div>
			<div class="mt-5">
				<section>Название объекта*</section>
				<input class="w-[600px] h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="До 50 символов"/>
			</div>
			<div class="mt-5 flex w-[600px]">
				<div class="w-1/2">
					<section>Номер объекта*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="Только цифры"/>
				</div>
				<div class="w-[20px]"/>
				<div class="w-1/2">
					<section>Площадь объекта*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="кв м"/>
				</div>
			</div>
			<div class="flex justify-start items-center w-[600px] h-[48px] mt-2">
				<img src={asset('/adminIcon/location.png')} class="w-[15.8px] h-[18.33px]"/>
				<button class="text-lg text-yellow-brown font-sm">ГЕОМЕТКА</button>
			</div>
			<div class="mt-2 flex-col w-[600px]">
				<section class="mb-1">Тип объекта*</section>
				<div class="flex">
					<div class={'flex items-center'}>
						<button class="checkBoxUnActive"/>
						<div class="ml-3 font-light text-base">апартаменты</div>
					</div>
					<div class={'flex items-center ml-5'}>
						<button class="checkBoxUnActive"/>
						<div class="ml-3 font-light text-base">таунхаус</div>
					</div>
					<div class={'flex items-center ml-5'}>
						<button class="checkBoxUnActive"/>
						<div class="ml-3 font-light text-base">коттедж</div>
					</div>
				</div>
			</div>
			<div class="flex w-[600px] h-[48px] mt-3">
				<div>
					<section>Этаж*</section>
					<input class="w-[84px] h-[52px] bg-gray-light  pl-3 placeholder::(font-light text-sm)" placeholder="число"/>
				</div>
				<div class="ml-5">
					<section>Балкон*</section>
					<input class="w-[152px] h-[52px] bg-gray-light pl-10 placeholder::(font-light text-sm)" placeholder="количество"/>
					<button class="checkBoxUnActive relative -top-9 left-2"/>
				</div>
				<div class="ml-5">
					<section>Терраса*</section>
					<input class="w-[152px] h-[52px] bg-gray-light pl-3" />
					<button class="checkBoxUnActive relative -top-9 left-2"/>
				</div>
				<div class="ml-5">
					<section>Гараж/парковка*</section>
					<input class="w-[152px] h-[52px] bg-gray-light pl-3"/>
					<button class="checkBoxUnActive relative -top-9 left-2"/>
				</div>
			</div>
			<div class="mt-10 flex-col w-[600px]">
				<section>Тип отополения*</section>
				<div class="flex">
					<div class={'flex items-center'}>
						<button class="checkBoxUnActive"/>
						<div class="ml-3 font-light text-base">центральное</div>
					</div>
					<div class={'flex items-center ml-5'}>
						<button class="checkBoxUnActive"/>
						<div class="ml-3 font-light text-base">эл теплый пол</div>
					</div>
					<div class={'flex items-center ml-5'}>
						<button class="checkBoxUnActive"/>
						<div class="ml-3 font-light text-base">газ теплый пол</div>
					</div>
				</div>
			</div>
			<div class="mt-5 flex w-[600px]">
				<div class="w-1/2">
					<section>Диагностика энергоэффективности*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="текст, NS"/>
				</div>
				<div class="w-[20px]"/>
				<div class="w-1/2">
					<section>Планируется сдача в аренду*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="да/нет"/>
				</div>
			</div>
			<div class="mt-5 flex w-[600px]">
				<div class="w-1/2">
					<section>Дата начала строительства*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="00.00.0000"/>
					<img src={asset('/adminIcon/calendar.png')} class={'w-7 h-7 relative left-60 -top-9'}/>
				</div>
				<div class="w-[20px]"/>
				<div class="w-1/2">
					<section>Дата окончания строительства*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="00.00.0000"/>
					<img src={asset('/adminIcon/calendar.png')} class={'w-7 h-7 relative left-60 -top-9'}/>
				</div>
			</div>
			<div class="flex w-[600px]">
				<div class="w-1/2">
					<section>Дата начала сбора*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="00.00.0000"/>
					<img src={asset('/adminIcon/calendar.png')} class={'w-7 h-7 relative left-60 -top-9'}/>
				</div>
				<div class="w-[20px]"/>
				<div class="w-1/2">
					<section>Дата начала выплат дивидендов*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="00.00.0000"/>
					<img src={asset('/adminIcon/calendar.png')} class={'w-7 h-7 relative left-60 -top-9'}/>
				</div>
			</div>
			<div class="flex w-[600px]">
				<div class="w-1/2">
					<section>Минимальная инвестиция*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="сумма в €"/>
				</div>
				<div class="w-[20px]"/>
				<div class="w-1/2">
					<section>Максимальная инвестиция*</section>
					<input class="w-full h-[48px] bg-gray-light rounded mt-1 pl-3 placeholder::(text-gray-dashed font-light text-sm)" placeholder="сумма в €"/>
				</div>
			</div>
			<div class="flex w-[600px] h-[48px] mt-5">
				<div>
					<section>Инвесторы*</section>
					<input class="w-[120px] h-[52px] bg-gray-light pl-3 placeholder::(font-light text-sm)" placeholder="кол-во"/>
				</div>
				<div class="ml-5">
					<section>Стоимость объекта*</section>
					<input class="w-[220px] h-[52px] bg-gray-light pl-10 placeholder::(font-light text-sm)" placeholder="сумма в €"/>
				</div>
				<div class="ml-5">
					<section>Стоимость аренды*</section>
					<input class="w-[220px] h-[52px] bg-gray-light pl-3 placeholder::(font-light text-sm)" placeholder="сумма в €"/>
				</div>
			</div>
			<div class="w-[600px] mt-10">
				<div class="flex items-center">
					<section class="w-1/3">Доходность</section>
					<input class="w-2/3 h-[52px] bg-gray-light pl-3 placeholder::(font-light text-sm)" placeholder="% в год"/>
				</div>
				<div class="mt-3 flex items-center">
					<section class="w-1/3">Цена в €</section>
					<input class="w-2/3 h-[52px] bg-gray-light pl-3 placeholder::(font-light text-sm)" placeholder="сумма в €"/>
				</div>
				<div  class="mt-3 flex items-center">
					<section class="w-1/3">Цена в токенах</section>
					<div class="w-2/3 flex">
						<input class="w-2/3 h-[52px] bg-gray-light pl-3 placeholder::(font-light text-sm)" placeholder="сумма в токенах"/>
						<div class="w-[5px]"/>
						<select class="w-1/3 h-[52px] bg-gray-light pl-3 placeholder::(font-light text-sm)" placeholder="токен"/>
					</div>
				</div>
			</div>
			<div>
				<section class="mt-3">Текст-подсказка*</section>
				<input class="w-[600px] h-[98px] mt-2 bg-gray-light pl-3 pr-3 placeholder-top placeholder::(font-light text-sm text-start)" placeholder="* этот проект будет профинансирован, если будет достигнута цель."/>
			</div>
			<div>
				<section class="mt-3">Описание объекта*</section>
				<input class="w-[600px] h-[98px] mt-2 bg-gray-light pl-3 pr-3 placeholder-top placeholder::(font-light text-sm text-start)" placeholder="количество символов не ограничено"/>
			</div>
			<div class="flex mt pt-9 pb-9">
				<button class="w-[180px] h-[57px] bg-yellow-orange center font-light text-default">
					СОХРАНИТЬ
				</button>
				<button class="w-[180px] h-[57px] ml-5 bg-gray-dark center font-light text-default text-white-light">
					ОТМЕНА
				</button>
			</div>
		</div>
	);
};

const TokenView = () => {
	const mock = 
	[
		{
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png',
		title: 'ALFATOKEN 1',
		description: 'Токен объекта по ул. Германа Титова, 704' ,
		number: 40494
		},
		{
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png',
			title: 'ALFATOKEN 2',
			description: 'Токен объекта по ул. Германа Титова, 704' ,
			number: 40490
		},
		{
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png',
			title: 'ALFATOKEN 3',
			description: 'Токен объекта по ул. Германа Титова, 704' ,
			number: 12444
		},
	]
	return(
		<div class="bg-white-light w-[50rem] h-[45rem] mt-24 flex flex-none flex-col items-center overflow-scroll pb-5" onClick={(event)=> event.stopPropagation()}>
			<div class="w-[600px] flex items-center mt-12">
				<div class="w-2/3">
					<section>Название токена</section>
					<input class="w-full h-[52px] mt-2 bg-gray-light pl-3 pr-3 placeholder-top placeholder::(font-light text-sm text-start)" placeholder="Название"/>
				</div>
				<div class="w-[15px]"/>
				<div class="w-1/3">
					<section class="mb-2">Название токена</section>
					<button class="w-full h-[52px] bg-gray-light border border-gray-dashed font-light text-sm">ЗАГРУЗИТЬ</button>
				</div>
			</div>
			<div class="w-[600px] mt-3">
				<section>Название токена</section>
				<select class="w-full h-[52px] mt-2 bg-gray-light pl-3 pr-3 "/>
			</div>
			<div class="w-[600px] mt-3">
				<section>Описание токена</section>
				<input class="w-full h-[52px] mt-2 bg-gray-light pl-3 pr-3 placeholder-top placeholder::(font-light text-sm text-start)" placeholder="Текст"/>
			</div>
			<div class="flex mt-7">
				<button class="w-[180px] h-[57px] bg-yellow-orange center font-light text-default">
					ДОБАВИТЬ
				</button>
				<button class="w-[180px] h-[57px] ml-5 bg-gray-dark center font-light text-default text-white-light">
					ОТМЕНА
				</button>
			</div>
			<div class="flex flex-col items-start w-[600px] h-[290px] mt-5">
				<section class="font-bold text-2xl">Токены в работе</section>
				<div class="w-full h-[1px] bg-gray-dashed mt-3 mb-3"/>
				<div class="overflow-scroll w-full h-full">
					{mock.map(TokenCard)}
				</div>
			</div>
		</div>
	)
}
function AddImageComponent () {
	return(
		<div class="center flex-col w-full h-full">
			<div class="w-20 h-16 center border border-gray-cool border-[1.5px] rounded mt-20 mb-5">
				<img src={asset("/adminIcon/image.png")} class={'w-9 h-9'}/>
			</div>
			<div class="text-sm font-default text-gray-dashed mb-5">Перетащите видео и изображения сюда или</div>
			<button class="bg-white-light border border-gray-dashed w-[240px] h-[48px] center text-sm mb-20 font-light rounded">ЗАГРУЗИТЬ ИЗОБРАЖЕНИЯ</button>
		</div>
	)
}

function TokenCard ({image, title, description, number}) {
	return(
		<div class="w-full h-[68px] flex mt-3 border border-gray-dashed rounded bg-gray-light">
			<div class="w-[10%] h-full center border-r border-gray-dashed">
				<img src={image} class={'w-[26px] h-[26px]'}/>
			</div>
			<div class="w-[80%] h-full p-2">
				<div class="flex w-full">
					<div class="w-1/3 font-medium text-default">
						{title}
					</div>
					<div class="w-2/3 font-light text-default text-gray-dashed">
					Объект №{number}
					</div>
				</div>
				<div class="font-light text-sm text-gray-dark">
					{description}
				</div>
			</div>
			<div class="w-[10%] h-full center">
				<img src={asset("/adminIcon/close.png")} class={'w-[28px] h-[28px]'}/>
			</div>
		</div>
	)
}