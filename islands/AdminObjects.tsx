import { asset } from "$fresh/runtime.ts";
import { boolState } from "#/utils.ts";
/* import { ObjectDataType } from "@/components/admin/AdminObjects.tsx"; */

const ObjectData = [
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		number: 12703,
		name: "Montenegro",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		number: 12703,
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		name: "Soho",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		number: 12703,
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		name: "komleks",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		number: 12703,
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		name: "ffffff",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		number: 12703,
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		name: "Fredd",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		number: 12703,
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		name: "Brod",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
	{
		image: "https://www.imufa.ru/images/2019/03/17/fotka3.jpg",
		number: 12703,
		tokenImage: "https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png",
		name: "Mur Mur",
		location: "Tivat 85320, Montenegro",
		priceEuro: 2345,
		priceXLM: 100,
		token: "ALFATOKEN",
		investors: 123,
		start: "10.02.2023",
		finish: "12.02.2023",
	},
];

export default function AdminObjects() {
	return (
		<div class="w-full h-full overflow-scroll ">
			<Section />
			<div class="pl-6 pr-6 -mt-5 col gap-y-3">
				{ObjectData.map(AdminObjectCard)}
			</div>
		</div>
	);
}

function Section() {
	return (
		<section class="w-full h-[5%] flex justify-center items-center ">
			<div class="w-[45%] flex items-center justify-center"></div>
			<div class="w-[15%] flex items-center justify-center text-sm text-gray-cool font-light">цены €/токен</div>
			<div class="w-[15%] flex items-center justify-start text-sm text-gray-cool font-light ">старт/финиш</div>
			<div class="w-[15%] flex items-center justify-start text-sm text-gray-cool font-light ">токен</div>
			<div class="w-[15%] flex items-center justify-start text-sm text-gray-cool font-light ">Инвесторы</div>
			<div class="w-[15%] flex items-center justify-center text-sm text-gray-cool font-light"></div>
		</section>
	);
}

const inputsFirstCol = ['Площадь объекта', 'Тип объекта', 'Начало строительства', 'Окончание строительства', 'Минимальные инвестиции', 'Максимальные инвестиции', 'Доходность']
const inputsSecondCol = ['Этаж', 'Тип отопления', 'Балкон', 'Гараж', 'Энергоэффективность', 'Сдача в аренду', 'Стоимость объекта']
function CreateObjectModal() {
	return (
		<div class="bg-red-light w-52 h-52 justify-center items-center">
			Hello
		</div>
	);
}

function AdminObjectCard({ image, number, name, location, priceEuro, priceXLM, start, finish, tokenImage, token, investors }) {
	const [isOpen, toggleOpen] = boolState();
	return (
		<div onClick={toggleOpen} class={`flex-col ${isOpen ? 'max-h-screen' : 'max-h-32'} z-10 transition-height`}>
			<div class={`w-full h-32 flex bg-gray-light mt-5 relative z-40`}>
				<div class="w-[14%] h-full flex items-center justify-center">
					<img src={image} class="w-24 h-24" />
				</div>
				<div class="w-[20%] h-full ml-6 flex flex-col justify-center items-start">
					<div class="text-xs font-light text-gray-dark">Объект №{number}</div>
					<div class="text-lg font-bold text-black">{name}</div>
					<div class="text-sm font-normal text-yellow-brown flex">
						<img src={asset("/adminIcon/location.png")} class="w-5 h-5 mr-1" />
						{location}
					</div>
				</div>
				<div class="w-[12%] h-full flex flex-col justify-center items-center">
					<div class="text-sm font-light text-black">€{priceEuro}</div>
					<div class="text-sm font-light text-yellow-brown">{priceXLM}XLM</div>
				</div>
				<div class="w-[12%] h-full flex flex-col justify-center items-center">
					<div>{start}</div>
					<div>{finish}</div>
				</div>
				<div class="w-[14%] h-full flex justify-center items-center">
					<img src={tokenImage} class="w-6 h-6 mr-2" />
					<div>{token}</div>
				</div>
				<div class="w-[12%] h-full flex justify-center items-center text-lg text-green-dark">
					<div>{investors}</div>
				</div>
				<div class="w-[14%] h-full flex">
					<button>
						<img src={asset("/adminIcon/update.png")} class="w-10 h-10" />
					</button>
					<button onClick={(event)=> {console.log('delete'); event.stopPropagation()}}>
						<img src={asset("/adminIcon/delete.png")} class="w-10 h-10 ml-2" />
					</button>
				</div>
			</div>
			<div class={`${isOpen ? 'opacity-[0.99]': 'opacity-0'} z-0 transition-opacity flex justify-center items-start row h-48 w-full pb-4 bg-gray-light`} onClick={(event)=> event.stopPropagation()}>
				<div class="w-[15%] h-full">
				</div>
				<div class="w-[28%] h-full flex flex-col items-start justify-start">
					{inputsFirstCol.map((input) => <div class="text-sm font-light flex justify-start items-center mt-1">{input}</div>)}
				</div>
				<div class="w-[27%] h-full flex flex-col items-center justify-start pl-2 pr-2 ">
					{inputsFirstCol.map((input) => <input class={'lk-input mt-1'}/>)}
				</div>
				<div class="w-[20%] h-full">
					{inputsSecondCol.map((input, index)=> (index < 2 || index > 3) ? <div class="text-sm font-light flex justify-start items-center mt-1 ">{input}</div> : <BalconyAmountInput title={input} controller index={index}/>)}
				</div>
				<div class="w-[20%] h-full pl-2 pr-2">
					{inputsSecondCol.map((input, index) => (index < 2 || index > 3) ? <input class={'lk-input mt-1 h-[17px]'} /> : <BalconyAmountInput title={input} />)}
				</div>
				<div class="w-[20%] h-full flex justify-center items-end pb-2 pr-2">
					<button class={'bg-yellow-dark w-[100%] h-[25%] font-light rounded'}>СОХРАНИТЬ</button>
				</div>
			</div>
		</div>
	);
}

function BalconyAmountInput ({title, controller, index}: {title: string, controller?: boolean, index?: number}) {
	return(
		<div class="row w-full">
			<div class="w-[40px]">
				<text class="font-light text-sm">{title}</text>
			</div>
			<div class="flex justify-start w-[40px]">
				<div class="checkBoxUnActive ml-5"/>
			</div>
			{controller && index === 2 &&<div class="flex justify-start w-[60px] ml-3">
				<input class="w-[60px] h-[20px] border border-gray-cool placeholder::(font-light text-sm flex text-center)" placeholder="кол-во"/>
			</div>}
		</div>
	)
}