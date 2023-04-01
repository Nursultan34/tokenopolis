import { asset } from "$fresh/runtime.ts";
//import IconMessageUser from "@/islands/IconUser.tsx";
import { boolState } from "#/utils.ts";
import { useEffect, useMemo, useReducer, useState } from "preact/hooks";
import { createPortal } from "preact/compat";

function match<T, O>(target: T, options: [T, O][]): O {
	const result = options.find((x) => target == x[0]) as [T, O];
	if (result != undefined) {
		return result[1];
	} else {
		throw new Error("non-exhaustive match");
	}
}

export enum PopUp {
	Notifications,
	Settings,
	None,
}

export default function AdminHeader() {
	const [currentPopUp, openPopUp] = useReducer(
		(currentPopUp: PopUp, newPopUp: PopUp) => currentPopUp == newPopUp ? PopUp.None : newPopUp,
		PopUp.None,
	);
	const [isDark, toggleTheme] = useReducer((dark: boolean, _) => {
		const newTheme = !dark;
		localStorage.setItem("dark", newTheme.toString());
		return newTheme;
	}, localStorage.getItem("dark") != "false");
	useEffect(() => setHtmlDark(isDark), [isDark]);

	const [test, setTest] = useState(false);
	/* console.log(test, "test"); */
	const createToken = () => {
		setTest((prev) => !prev);
	};
	useEffect(() => {
		const modalRootElement = document.querySelector("#modal");
	}, [test]);
	const createObject = () => {
		window.alert("object");
	};
	return (
		<header class="h-24 flex-shrink-0 w-full bg-white-dark flex flex-row shadow-header z-20">
			<div class="grid flex-none w-36 justify-items-center items-center">
				<img src={asset("/headerImage/LogoIcon.png")} class="w-11 h-12" />
			</div>
			<div class="flex-auto flex flex-row w-max items-center justify-end">
				<div class="flex flex-row justify-center items-center mr-4">
					<CustomButton name="Добавить токен" buttonFunction={createToken} />
					<CustomButton name="Добавить объект" buttonFunction={createObject} />
					<div class="w-[56px] h-[56px] rounded-[50px] border border-gray-bg mr-3 flex justify-center items-center">
						<img
							src={asset("/headerImage/EllipseImage.png")}
							class="w-[48px] h-[48px]"
						/>
					</div>
					<text class="font-medium mr-3">Nikita Resheteev</text>
					<div class="mr-7 flex">
						<img
							src={asset("/headerImage/Account.png")}
							style={{ width: 44, height: 44 }}
							class="hover:opacity-70 mr-3"
							onClick={() => openPopUp(PopUp.Settings)}
						/>
						<img
							class="mr-3"
							src={asset("/headerImage/Message.png")}
							style={{ width: 44, height: 44 }}
							onClick={() => openPopUp(PopUp.Notifications)}
						/>
						{match(currentPopUp, [
							[PopUp.Notifications, <NotificationsPopUp />],
							[
								PopUp.Settings,
								<SettingsPopUp isDark={isDark} toggleTheme={toggleTheme} />,
							],
							[PopUp.None, <></>],
						])}
						{currentPopUp != PopUp.None && (
							<div onClick={() => openPopUp(PopUp.None)} class="h-[calc(100vh-93px)] w-screen bg-black absolute bottom-0 left-0 opacity-50 z-10" />
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

function SettingsPopUp({ isDark, toggleTheme }) {
	let [displayLangMenu, toggleLangMenu] = boolState();
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

function CustomButton({ name, buttonFunction }: { name: string; buttonFunction: () => void }) {
	return (
		<button class="bg-yellow-orange w-60 h-12 mr-5 active:bg-yellow-orange focus:bg-yellow-orange" onClick={buttonFunction}>
			{name}
		</button>
	);
}

const ModalView = () => {
	return (
		<div class="w-full h-full flex justify-center items-center absolute bg-gray-dashed">
			<div>
				Modalka
			</div>
		</div>
	);
};
