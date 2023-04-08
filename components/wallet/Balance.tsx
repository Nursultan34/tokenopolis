import { asset } from "$fresh/runtime.ts";

export default function Balance() {
    return (
        <div class="row col min-w-[854px] max-h-[532px] 
        bg-white dark:bg-black py-[32px] pl-[48px] pr-[28px] justify-between">

            <div class="col">
                <h2 class="text-[1.625rem] leading-[1.625rem] text-darkGrey font-bold">Общий баланс</h2>
                <img class="mt-[20px] mb-[28px]" src={asset("/line4.svg")} />

                <div class="col">
                    <h3 class="text-5xl text-darkGrey font-bold mb-[8px]">2237.93€</h3>
                    <div class="row align-center text-yellow-main font-bold">
                        <h3 class="text-5xl mr-[8px]">415</h3><span class="text-[2.125rem] leading-[48px] align-center">XLM</span>
                    </div>
                </div>

                <div class="col mt-[20px]">
                    <p class="text-green-2 text-base">+12% за неделю</p>
                    <p class="text-gray-main">Ожидается к конце недели: +8%</p>
                </div>

                <img class="mt-[20px] mb-[28px]" src={asset("/line4.svg")} />

                <div class="col">
                    <div class="row align-center cursor-pointer mb-[16px]">
                        <p class="uppercase text-sm text-gray-main mr-[6px]">Копировать адрес кошелька</p>
                        <img class="w-[20px] h-[20px] " src={asset("/documentcopy.svg")} alt="" />
                    </div>
                    <button class="p-[16px] row justify-between bg-gray-white uppercase text-sm mb-[14px]">
                        <span class="text-gray-main">Доступно XLM</span> <span class="font-bold">532 XLM</span>
                    </button>
                    <button class="uppercase p-[15px] bg-gray-main text-white">смотреть объекты</button>
                </div>
            </div>

            <div class="row max-w-[470px] flex-wrap  overflow-y-auto">
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
                <XLMBalanceItem />
            </div>
        </div>
    )
}

function XLMBalanceItem() {
    return (
        <div class="row h-[111px] w-[212px] bg-darkGray px-[16px] py-[12px] justify-between mr-[12px] mb-[8px] cursor-pointer">
            <div class="col justify-between">
                <p class="uppercase text-white text-sm">Polisvilla</p>

                <div class="col">
                    <h2 class="text-white text-[26px] leading-[26px] font-bold">345.0</h2>
                    <p class="opacity-40 text-white">704,1€</p>
                </div>
            </div>

            <div class="col justify-between">
                <img class="w-[36px] h-[36px] self-end" src={asset("/balance-logo.svg")} alt="" />
                <p class="opacity-40 text-white">до 24.12.23</p>
            </div>
        </div>
    )
}
