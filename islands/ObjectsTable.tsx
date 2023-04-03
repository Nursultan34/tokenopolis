import { asset } from "$fresh/runtime.ts";
import { useEffect, useMemo, useReducer, useState } from "preact/hooks";
import { match } from "#/utils.ts";
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";

enum Filter {
	Relevant,
	My,
	Favorite,
}

export default function ObjectsTable({ objects }) {
	const [objectsState, setObjectsState] = useState(objects);

	const [filteredBy, setFilter] = useState(Filter.Relevant);
	const filterObjects = filter =>
		match(filter, [
			[Filter.Relevant, R.identity],
			[Filter.My,       R.filter(R.prop("isMyObject"))],
			[Filter.Favorite, R.filter(R.prop("favorite"))],
		])(objectsState);

	const setLike = (id: number, favoriteState: boolean) => {
		const favoriteSetter = R.set(R.lensProp("favorite"), favoriteState);
		const object_index	 = R.findIndex(R.propEq("number", id));
		const new_objects	 = R.adjust(object_index, favoriteSetter, objectsState);
		setObjectsState(new_objects);
	};

	return (
		<div id="objects-container" class="col h-screen pt-3.5 pb-10 pl-16">
			<div class="row min-h-9 my-4 text(base gray-dark) children:(px-[40px] py-2 hover:bg-gray-cool focus:outline-none)">
				<BtnFilter isActive={filteredBy == Filter.Relevant} onClick={() => setFilter(Filter.Relevant)} text="АКТУАЛЬНЫЕ ОБЪЕКТЫ" />
				<BtnFilter isActive={filteredBy == Filter.My}		onClick={() => setFilter(Filter.My)}       text="МОИ ОБЪЕКТЫ" />
				<BtnFilter isActive={filteredBy == Filter.Favorite} onClick={() => setFilter(Filter.Favorite)} text="ИЗБРАННОЕ" />
			</div>
			<div class="row justify-start flex-wrap pl-0 ml-0 w-auto gap-5 overflow-y-scroll">
				{filterObjects(filteredBy).map(o => <ObjectCard {...o} setLike={setLike} />)}
			</div>
		</div>
	);
}

function BtnFilter({ isActive, text, onClick }: { isActive: boolean; text: string; onClick: () => void }) {
	return <button class={isActive ? "bg-gray-cool text-dark-midnight" : "bg-white-dark dark:(bg-gray-dark text-gray-light hover:bg-gray-cool)"} onClick={onClick}>{text}</button>;
}

interface ObjectCardProps {
	name: string;
	number: number;
	cost: string;
	tokenCost: string;
	investors: string;
	square: string;
	date: string;
	profitability: string;
	images: any;
	favorite: boolean;
	invested: number;
	reqInvestments: number;
	status: string;
}

function ObjectCard(
	{ name, number, cost, tokenCost, investors, square, date, profitability, images, favorite, invested, reqInvestments, status, setLike }: ObjectCardProps & {
		setLike: (number: number, favoriteState: boolean) => void;
	},
) {
	const textxs = "text-gray-dark text-xs dark:text-gray-dashed";

	return (
		<div class="row justify-between bg-white-light p-12 text-xs md:text-sm text-black gap-5 shadow-lg w-[90vw] lg:(flex-basis-1/2 w-full) xl:flex-basis-1/3 dark:(bg-dark-midnight text-gray-light)">
			<Image images={images} favorite={favorite} status={status} setLike={setLike} number={number} />
			<div class="col justify-between w-1/2 ">
				<div>
					<h1 class="font-bold text-2xl leading-6 ">{name}</h1>
					<p class="text(sm gray-dark) mt-1 dark:text-gray-dashed">ОБЪЕКТ №{number}</p>
					<div class="row justify-between flex-wrap">
						<div class="col justify-end flex-shrink-0 gap-1 text(base gray-dark) dark:text-gray-dashed">
							<div class="row gap-1">
								<div>
									<img class="" src={asset("/obj-square-icon.svg")} />
								</div>
								<p class="self-center">{square} кв м</p>
							</div>
							<div class="row gap-1">
								<div>
									<img class="" src={asset("/obj-date-icon.svg")} />
								</div>
								<p class="self-center">{date}</p>
							</div>
							<div class="row gap-1">
								<div>
									<img class="" src={asset("/obj-profit-icon.svg")} />
								</div>
								<p class="self-center">{profitability} %/год</p>
							</div>
						</div>
						<div class="text-right">
							<p class={textxs}>ЦЕНА</p>
							<p class="mb-1 font-bold text-2xl leading-8 pb-1 xl:text-4xl">€{cost}</p>
							<p class={textxs}>ТОКЕН ЦЕНА</p>
							<p class="font-bold text(2xl yellow-dark) xl:text-4xl">{tokenCost}</p>
						</div>
					</div>
				</div>
				<div class="children:rounded-sm">
					<p class="mb-2 font-bold text(sm green-dark right)">{investors} УЖЕ ПРОИНВЕСТИРОВАЛИ</p>
					<button class="w-full text-base h-12 border(1 gray-cool) mb-1 dark:border-none hover:text-yellow-orange">подробнее</button>
					<button class="w-full h-12 bg-yellow-orange text-base dark:text-black hover:bg-yellow-dark">ИНВЕСТИРОВАТЬ</button>
				</div>
			</div>
		</div>
	);
}

interface Image {
	images: any;
	favorite: boolean;
	status: "sell" | "hit" | "sold";
	number: number;
}

function Image({ images, favorite, status, setLike, number }: Image & { setLike: (number: number, favoriteState: boolean) => void }) {
	const [currentImage, switchImage] = useReducer((currentImage, action) =>
		match(action, [
			// Restarts the counter if we're at the end
			["increment", (currentImage + 1) % images.length],
			// Goes to the end if we're in the beginning
			["decrement", (currentImage + images.length - 1) % images.length],
		]), 0);

	const [favoriteState, setFavorite] = useState(false);
	const toggleFavorite = () => setLike(number, !favoriteState);
	const favoriteIcon = useMemo(() => favoriteState ? "/obj-heart-active.svg" : "/obj-heart.svg", [favoriteState]);

	// For reactivity with the property
	useEffect(() => setFavorite(favorite), [favorite]);

	const statusMap = {
		sell: {
			text: "идут продажи",
			bg: "bg-green-dark text-white-dark",
		},
		hit: {
			text: "хит продаж",
			bg: "bg-red-dark text-white-dark",
		},
		sold: {
			text: "продано",
			bg: "bg-gray-dashed text-black",
		},
	};

	const statusClasses = `absolute top-3 right-3 w-[139px] h-[34px] pt-[9px] font-light text(sm center) leading-none ${statusMap[status].bg}`;
	return (
		<div class="relative h-full">
			<img class="h-full aspect-square w-full object-cover" src={asset(images[currentImage])} />
			<button class="absolute top-4 left-4  w-[28px] h-[28px] focus:outline-none" onClick={toggleFavorite}>
				<img class="mx-auto" src={asset(favoriteIcon)} />
			</button>
			<button class="absolute top-1/2 w-[28px] h-[28px] focus:outline-none" onClick={() => switchImage("decrement")}>
				<img class="m-auto" src={asset("/obj-arr-left.svg")} />
			</button>
			<button class="absolute top-1/2 right-2 focus:outline-none" onClick={() => switchImage("increment")}>
				<img src={asset("/obj-arr-right.svg")} />
			</button>
			<div class={statusClasses}>{statusMap[status].text}</div>
			<div class="absolute bottom-3 left-0 right-0 text(center white-light)">{currentImage + 1}/{images.length}</div>
		</div>
	);
}
