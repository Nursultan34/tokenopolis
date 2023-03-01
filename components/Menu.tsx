import { asset } from "$fresh/runtime.ts";

export default function Menu() {
	return (
		<div class="fixed left-0 items-center py-5 w-20 h-full col bg-dark-800">
			<img src={asset("/lk-logo.svg")} />
		</div>
	);
}
