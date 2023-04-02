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
		<header class="header">
			<div class="center w-36">
				<img src={asset("/headerImage/LogoIcon.png")} class="w-11 h-12" />
			</div>
			<div class="row items-center justify-end w-max">
				<div class="row center mr-4">
					<Button name="Добавить токен"  onClick={() => popUp(<ModalView />)} />
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
		<div class="w-full h-full center absolute bg-gray-dashed">
			<div>
				Modalka
			</div>
		</div>
	);
};
