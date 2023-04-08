import { useEffect, useState } from "preact/hooks";

export default function ModalContainer() {
	const [isDisplayed, setDisplay] = useState(false);
	useEffect(() => {
		const modalContainer = document.getElementById("modal-container");
		// Hides the modal container if it has no children
		const updateIsDisplayed = () => setDisplay(modalContainer?.children.length > 0);
		// Runs the callback if modal container's children changed
		new MutationObserver(updateIsDisplayed).observe(modalContainer!, { childList: true, subtree: true });
	}, [isDisplayed]);

	return (
		<div id="modal-container"
			class={"w-screen h-screen overflow-hidden flex justify-center items-center bg-black fixed transition-opacity " +
				(isDisplayed ? "opacity-50" : "opacity-0 ignore-clicks")}
			onClick={() => removeChildren(document.getElementById("modal-container"))}>
		</div>
	);
}

function removeChildren(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
