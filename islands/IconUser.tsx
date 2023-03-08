import { asset } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

const DARK = "dark";
const LIGHT = "light";

export default function IconMessageUser() {
	const [active, setActive] = useState(false);
	const [userState, setUserState] = useState(false);
	const [messageState, setMessageState] = useState(false);
	const [mouseStatus, setMouseStatus] = useState(false);
	const [langState, setLangState] = useState(false);
	function activeButton() {
		setActive((prev) => !prev);
	}

	function openUserModal() {
		if (!active) {
			setActive((prev) => !prev);
		} else if (active && !messageState) {
			setActive((prev) => !prev);
		}
		if (!userState && !messageState) {
			setUserState((prev) => !prev);
		} else if (messageState && !userState) {
			setMessageState((prev) => !prev);
			setUserState((prev) => !prev);
		} else if (userState) {
			setUserState((prev) => !prev);
		}
	}
	function openMessageModal() {
		if (!active) {
			setActive((prev) => !prev);
		} else if (active && !userState) {
			setActive((prev) => !prev);
		}
		if (!userState && !messageState) {
			setMessageState((prev) => !prev);
		} else if (!messageState && userState) {
			setUserState((prev) => !prev);
			setMessageState((prev) => !prev);
		} else if (messageState) {
			setMessageState((prev) => !prev);
		}
	}
	const [switchState, setSwitchState] = useState(localStorage.getItem("theme") || LIGHT);
	useEffect(() => {
		localStorage.setItem("theme", switchState);
	}, [switchState]);
	useEffect(() => {
		setHtmlDark(localStorage.getItem("theme")!);
	}, [switchState]);
	return (
		<div class="flex flex-row">
			<img src={asset("headerImage/Account.png")} style={{ width: 44, height: 44 }} class="hover:opacity-70 mr-3" onClick={() => openUserModal()} />
			{active && (
				<div class="absolute z-10 bg-dark-midnight right-0 opacity-60 top-[10%]" style={{ width: "100%", height: "95%" }}>
				</div>
			)}
			{userState && (
				<div class="bg-white-dark absolute z-20 right-4 top-24" style={{ width: 320, height: 417 }}>
					<div class="bg-gray-light mt-6 ml-4 flex flex-col justify-start items-center" style={{ width: 288, height: 372 }}>
						<div class="w-full h-1/2 mt-6">
							<div class="w-full flex flex-row justify-center items-center h-1/3" style={{ display: "flex", flex: 1 }}>
								{!langState && (
									<button
										class={`border border-white-dark flex flex-row justify-end items-center bg-white-dark rounded-sm hover:bg-yellow-light hover:border-yellow-light rounded-sm focus:outline-none`}
										style={{ width: 260, height: 54 }}
										onMouseEnter={() => setMouseStatus(true)}
										onMouseLeave={() => setMouseStatus(false)}
										onClick={() => setLangState((prev) => !prev)}
									>
										<text class="mr-4 flex flex-row justify-center items-center font-light">ВЫБРАТЬ ЯЗЫК</text>
										<img class="mr-3.5" src={asset("headerImage/translate.png")} style={{ width: 25.08, height: 25.08 }} />
									</button>
								)}
								{langState && (
									<button
										class={`border flex flex-row justify-end items-center rounded-sm bg-yellow-light border-gray-dashed rounded-sm focus:outline-none`}
										style={{ width: 260, height: 54 }}
										onMouseEnter={() => setMouseStatus(true)}
										onMouseLeave={() => setMouseStatus(false)}
										onClick={() => setLangState((prev) => !prev)}
									>
										<text class="mr-4 flex flex-row justify-center items-center font-light">
											{langState ? <img class="mr-3" src={asset("headerImage/Vector.png")} style={{ width: 7.1, height: 15.84 }} /> : ""}ВЫБРАТЬ ЯЗЫК
										</text>
										<img class="mr-3.5" src={asset("headerImage/translate.png")} style={{ width: 25.08, height: 25.08 }} />
									</button>
								)}
								{langState && (
									<div class="bg-white-dark absolute right-[calc(20.3rem)] flex justify-center items-center" style={{ width: 164, height: 174 }}>
										<div style={{ width: 140, height: 134 }} class="flex flex-col justify-center items-center rounded-sm">
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
								)}
							</div>
							<div class="flex w-full justify-center items-center h-1/3" style={{ display: "flex", flex: 1 }}>
								<div
									class="flex flex-row bg-white-dark border border-white-dark justify-end items-center hover:bg-yellow-light hover:border-yellow-light rounded-sm"
									style={{ width: 260, height: 54 }}
								>
									<text class="mr-4 flex flex-row justify-center items-center text-xl font-light">Профиль</text>
									<img class="mr-3.5" src={asset("headerImage/profilecircle.png")} style={{ width: 28, height: 27 }} />
								</div>
							</div>
							<div class="flex w-full justify-center items-center h-1/3 pl-3.5 pr-3.5" style={{ display: "flex", flex: 1 }}>
								<div
									class={`flex flex-row bg-white-dark border border-white-dark justify-end items-center hover:bg-yellow-light hover:border-yellow-light rounded-sm ${
										switchState == LIGHT ? "bg-yellow-light border border-yellow-light" : "bg-white"
									}`}
									style={{ width: 132, height: 48 }}
									onClick={() => setSwitchState(LIGHT)}
								>
									<img class="mr-3.5" src={asset("headerImage/sun.png")} style={{ width: 38, height: 38 }} />
									<text class="mr-4 flex flex-row justify-center items-center text-xs font-light">Светлая</text>
								</div>
								<div
									class={`flex flex-row bg-white-dark ml-2 border border-white-dark justify-end items-center hover:bg-violet border hover:border-violet rounded-sm ${
										switchState == DARK ? "bg-violet border border-violet" : "bg-white"
									}`}
									style={{ width: 132, height: 48 }}
									onClick={() => setSwitchState(DARK)}
								>
									<img class="mr-3.5" src={asset("headerImage/moon.png")} style={{ width: 33, height: 28 }} />
									<text class="mr-4 flex flex-row justify-center items-center text-xs font-light">Темная</text>
								</div>
							</div>
							<div class="flex w-full flex-row justify-center items-center justify-center items-center h-1/3" style={{ display: "flex", flex: 1 }}>
								<div
									class="flex flex-row justify-end items-center border border-white-dark bg-white-dark hover:bg-yellow-light hover:border-yellow-light"
									style={{ width: 260, height: 54 }}
								>
									<div class="mr-4 text-xl font-light">Выход</div>
									<img class="mr-3.5" src={asset("headerImage/logout.png")} style={{ width: 26, height: 26 }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<img class="mr-3" src={asset("headerImage/Message.png")} style={{ width: 44, height: 44 }} onClick={() => openMessageModal()} />
			{messageState && (
				<div class="bg-white-dark absolute z-20 right-4 top-24 flex justify-center items-center" style={{ width: 320, height: 541 }}>
					<div class="bg-gray-light" style={{ width: 287, height: 499, display: "flex", flexDirection: "column" }}>
						<div style={{ display: "flex", flex: 0.7, justifyContent: "space-between", alignItems: "center", padding: 16 }}>
							<text class="font-medium text-lg">Уведомление</text>
							<img style={{ width: 26, height: 26 }} src={asset("headerImage/MessageTwo.png")} />
						</div>
						<div style={{ width: 255, height: 1 }} class="bg-gray-dashed ml-4" />
						<div style={{ display: "flex", flex: 3, padding: 20 }}>
							В настоящее время уведомлений нет.

							Мы сообщим как только появится что-то интересное!
						</div>
						<div style={{ width: 255, height: 1 }} class="bg-gray-dashed ml-4 -mt-40" />
						<div style={{ display: "flex", flex: 3 }}></div>
					</div>
				</div>
			)}
		</div>
	);
}

function setHtmlDark(theme: string) {
	if (theme == DARK) {
		document.getElementsByTagName("html")[0].classList.add("dark");
	} else {
		document.getElementsByTagName("html")[0].classList.remove("dark");
	}
}
