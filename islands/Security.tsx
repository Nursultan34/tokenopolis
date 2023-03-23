export default function Security() {
	return (
		<div class="w-[19vw] col px-[45px] pb-16 pt-9 justify-between text-black bg-white">
			<span class="text-darkGray text-2xl font-bold">Безопасность</span>
			<form class="col justify-between" action="">
				<div class="col">
					<span class="text-xs">ТЕКУЩИЙ ПАРОЛЬ</span>
					<input class="bg-gray-white rounded-sm mt-0.5 py-[15.5px] pl-4 text-base" type="text" placeholder="*******" />
				</div>
				<div class="col">
					<span class="text-sm font-bold mt-[43px]">Двухфакторная аутентификация</span>
					<span class="text-xs mt-1.5">SMS НА НОМЕР ТЕЛЕФОНА</span>
					<input class="bg-gray-white rounded-sm mt-0.5 py-[15.5px] pl-4 text-base" type="text" placeholder="*******" />
				</div>
			</form>
			<button class="self-center rounded-sm text-base py-4 px-[32.5px] bg-yellow-btn">ИЗМЕНИТЬ ПАРОЛЬ</button>
		</div>
	);
}
