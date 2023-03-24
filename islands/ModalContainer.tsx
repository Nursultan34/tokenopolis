import { useEffect, useCallback, useState, useReducer } from "preact/hooks";
import { boolState } from "@/lib/utils.ts";

export default function ModalContainer() {
	const [isDisplayed, setDisplay] = boolState();
	useEffect(() => {
		const modalContainer = document.getElementById("modal-container");
		// Hides the modal container if it has no children
		const updateIsDisplayed = () => { console.log(modalContainer?.children.length) ; setDisplay(modalContainer?.children.length > 0) };
		// Runs the callback if modal container's children changed
		new MutationObserver(updateIsDisplayed).observe(modalContainer!, { childList: true, subtree: true });
	}, [isDisplayed]);

	return <div id="modal-container" class={"w-screen h-screen flex justify-center items-center bg-black opacity-50 " + (isDisplayed ? "absolute" : "hidden")}></div>;
}
