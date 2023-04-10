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
		<div
			class={"w-full h-full left-0 top-0 z-40 flex justify-center items-center absolute transition-opacity " +
				(isDisplayed ? "opacity-100" : "opacity-0 ignore-clicks")}
			onClick={() => removeChildren(document.getElementById("modal-container"))}>
				<div class="center">
					<div class="bg-gray-dark w-screen h-screen opacity-60 absolute top-0 left-0 z-40"/>
					<div id="modal-container" class="z-50"></div>
				</div>
		</div>
	);
}

function removeChildren(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
