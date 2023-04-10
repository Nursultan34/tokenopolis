import adminWrapper from "@/lib/adminWrapper.tsx";
import AdminCalendarEvent from "../../islands/AdminCalendarEvent.tsx";
import ModalContainer from "../../islands/ModalContainer.tsx";
import NotificationComponent from "../../islands/NotificationComponent.tsx";
import ReadyAdminCalendarEvent from "../../islands/ReadyAdminCalendarEvent.tsx";

export default function CalendarAdminScreen() {
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
			<article class="bg-gray-light flex h-[95%]">
				<div class="flex-auto w-[74%]">
					<div class="w-full h-1/2">
						<AdminCalendarEvent/>
					</div>
					<div class="h-[20px] w-full bg-gray-light center">
						<div class="h-[1.5px] w-full bg-gray-dashed"/>
					</div>
					<div class="w-full h-1/2">
						<ReadyAdminCalendarEvent/>
					</div>
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
