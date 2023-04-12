interface TokenBalance {
    name: string;
    icon: string;
    valueXLM: number;
    valueEuro: number;
    date: string;
}

const testBalances: TokenBalance[] = [
    {
        name: 'POLISVILLA1',
        icon: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        valueXLM: 345.0,
        valueEuro: 704.1,
        date: '24.12.23',
    },
    {
        name: 'POLISVILLA2',
        icon: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        valueXLM: 345.2,
        valueEuro: 704.1,
        date: '24.12.23',
    },
    {
        name: 'POLISVILLA3',
        icon: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        valueXLM: 345.0,
        valueEuro: 704.1,
        date: '24.12.23',
    },
    {
        name: 'POLISVILLA4',
        icon: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        valueXLM: 345.0,
        valueEuro: 704.1,
        date: '24.12.23',
    },
    {
        name: 'POLISVILLA5',
        icon: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        valueXLM: 345.0,
        valueEuro: 704.1,
        date: '24.12.23',
    },
];

export default function Wallet() {
    return (
        <div class="bg-white-light p-7 flex flex-col w-full h-full">
            <span class="font-bold text-xl">Мой кошелёк</span>
            <div class="flex flex-wrap w-full overflow-scroll grid grid-cols-2 gap-2">
                {testBalances.map(Balance)}
            </div>
            <div class="w-full flex flex-col">
                <div class="flex flex-row justify-between">
                    <span>Общий баланс</span>
                    <span class="text-green-dark">
                        +12% за неделю
                    </span>
                </div>
                <div class="flex flex-row justify-between text-xl font-black">
                    <span>2237.93€</span>
                    <span class="text-yellow-orange">
                        415 XLM
                    </span>
                </div>
            </div>
            <button class="bg-gray-dark text-white-light font-light text-sm hover:opacity-80 p-2">
                ПОПОЛНИТЬ КОШЕЛЕК
            </button>
        </div>
    );
}

function Balance({
    name,
    icon,
    valueXLM,
    valueEuro,
    date,
}: TokenBalance) {
    return (
        <div class="w-full bg-dark-midnight text-sm flex-auto hover:opacity-90 p-2">
            <div class="flex flex-row justify-between">
                <span class="text-white-light">{name}</span>
                <img src={icon} class="h-6" />
            </div>
            <span class="text-xl font-black text-white-light">
                {valueXLM}
            </span>
            <div class="flex justify-between text-gray-dashed">
                <span>{valueEuro}€</span>
                <span class="font-bold">{date}</span>
            </div>
        </div>
    );
}
