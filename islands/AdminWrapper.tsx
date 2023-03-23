import AdminHeader from "@/islands/AdminHeader.tsx";
import AdminMenu from "@/components/AdminMenu.tsx";
import { useEffect, useState } from "preact/hooks";

export default function AdminWrapper({ children }: any) {
	const [currentModal, setModal] = useState<Element | null>(null);
	useEffect(() => setModal((<div>привет!!</div>)), []);
	console.log(children);
	return (
		<main class="col h-screen w-screen">
			{currentModal !== null && (
				<ModalContainer>
					{currentModal}
				</ModalContainer>
			)}
			<div
				class={`h-[10%] flex justify-center items-center`}
				style={{ display: "flex", flex: 1 }}
			>
				<AdminHeader />
			</div>
			<div
				class="row h-[90%] bg-white-dark"
				style={{ display: "flex", flex: 10 }}
			>
				<AdminMenu />
					<div class="h-full w-full bg-gray-light dark:bg-black p-5">
            {children}
          </div>
			</div>
		</main>
	);
}

function ModalContainer({ children }) {
	return (
		<div class="w-screen h-screen bg-black opacity-50 absolute">
			{children}
		</div>
	);
}
