import AdminObjects from "@/islands/AdminObjects.tsx";
import NotificationComponent from "../../islands/NotificationComponent.tsx";
import adminWrapper from "@/lib/adminWrapper.tsx";
import ModalContainer from "@/islands/ModalContainer.tsx";

export default function ObjectsAdminScreen() {
	return adminWrapper(
		<main class="w-full h-full">
			<ModalContainer />
			<article class="h-[5%] flex">
				<div class="w-[75%]">
					<section class="text-lg font-bold">Объекты в работе</section>
				</div>
				<div class="w-[25%]">
					<section class="text-lg font-bold">Уведомления</section>
				</div>
			</article>
			<article class="bg-white-light flex h-[95%]">
				<div class="flex-auto w-[74%]">
					<AdminObjects />
				</div>
				<div class="w-[1%] bg-gray-light"></div>
				<div class="flex-auto w-[25%]">
					<div class="bg-yellow-light h-[40%]"></div>
					<div class="h-[2%] bg-gray-light" />
					<div class="bg-white-light h-[58%]">
						<NotificationComponent />
					</div>
				</div>
			</article>
		</main>,
	);
}
