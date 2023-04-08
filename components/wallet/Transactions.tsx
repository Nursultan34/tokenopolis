import { asset } from "$fresh/runtime.ts";

export default function Transactions() {
    return (
        <div class="col min-w-[606px] max-h-[478px] bg-white dark:bg-black pl-[33px] pr-[28px] pt-[16px] pb-[10px]">
            <div class="row w-full justify-between align-center">
                <div class="col max-w-[290px] w-[47%] text-sm">
                    <h2 class="text-[1.625rem] leading-[1.625rem] font-bold">Транзакции</h2>
                    <div class="row justify-between h-[28px] mt-[12px]">
                        <p class="uppercase text-gray-main">Все</p>
                        <p class="uppercase text-gray-dashed">Отправленные</p>
                        <p class="uppercase text-gray-dashed">Принятые</p>
                    </div>
                </div>
                <button class="uppercase bg-gray-main text-white px-[29px] py-[11px] h-[44px] ">Посмотреть все</button>

            </div>

            <div class="scrollbar col max-h-[386px] overflow-y-auto overscroll-y-contain relative">
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
            </div>
        </div>
    )
}

function TransactionItem() {
    return (
        <div class="col bg-gray-white px-[20px] py-[12px] z-index mb-[4px] cursor-pointer">
            <div class="row justify-between align-center" >
                <p class="text-sm text-[#2A2B31]">16:23, 12 дек 2018</p>
                <div class="row">
                    <img src={asset("/Iconsax.svg")} />
                    <p class="text-[#B0ADB1] text-lg leading-[25px] ml-[12px]">0,009 БТД</p>
                </div>
            </div>
            <p class="text-[#42434B]"> 1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB</p>
        </div>
    )
}
