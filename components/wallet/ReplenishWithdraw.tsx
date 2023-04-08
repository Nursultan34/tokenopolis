export default function ReplenishWithdraw() {
    return (
        <div class="col min-w-[606px] max-h-[394px] justify-between mb-[20px]">
            <div class="row w-full px-[28px] py-[16px] bg-white dark:bg-black">
                <div class="col w-[50%] justify-center">
                    <h3 class="text-lg font-bold leading-[110%]">Купить XLM</h3>

                </div>
                <button class="w-[50%] py-[13px] px-[48.5px] uppercase bg-yellow-main text-base">пополнить баланс</button>
            </div>
            <div class="col w-full bg-white dark:bg-black py-[32px] px-[28px] mt-[16px]">
                <h3 class="text-lg leading-5 font-bold">Вывести XLM</h3>
                <div class="col mt-[12px] mb-[8px]">
                    <p>Ваш кошелек</p>
                    <div class="row items-center">
                        <label htmlFor="#" class="text-sm uppercase w-full h-[44px] text-gray-main">
                            из
                            <input type="text" class="bg-gray-white w-[93%] h-full ml-[19px] px-[20px] text-black" /></label>
                    </div>
                </div>
                <div class="col mb-[10px]">
                    <p>Сторонний кошелек</p>
                    <div class="row items-center">
                        <label htmlFor="#" class="text-sm uppercase  w-full h-[44px] text-gray-main">
                            на
                            <input type="text" class="bg-gray-white w-[93%] h-full ml-[19px] px-[20px] text-black" value={"1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzbg9t"} /></label>
                    </div>
                </div>
                <div class="row items-center">
                    <label htmlFor="#" class="text-sm uppercase  w-full h-[44px] text-gray-main">
                        кол-во xlm
                        <input type="text" class="bg-gray-white w-[65%] h-full ml-[8px] px-[20px] text-black" /></label>
                    <button class="uppercase bg-yellow-main px-[54px] py-[12px]">Перевести</button>
                </div>
            </div>
        </div >
    )
}
