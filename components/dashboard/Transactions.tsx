import {asset} from '$fresh/runtime.ts';

const testTransactions = [
    {
        time: '08:23',
        date: '18 дек 2018',
        status: true,
        transactions: 0.449,
        walletNum: 'asfavdvadv8896vavasv9as8scSC554CSCzcz',
    },
    {
        time: '08:23',
        date: '18 дек 2018',
        status: false,
        transactions: 0.449,
        walletNum: 'asfavdvadv8896vavasv9as8scSC554CSCzcz',
    },
    {
        time: '08:23',
        date: '18 дек 2018',
        status: false,
        transactions: 0.449,
        walletNum: 'asfavdvadv8896vavasv9as8scSC554CSCzcz',
    },
    {
        time: '08:23',
        date: '18 дек 2018',
        status: true,
        transactions: 0.449,
        walletNum: 'asfavdvadv8896vavasv9as8scSC554CSCzcz',
    },
    {
        time: '08:23',
        date: '18 дек 2018',
        status: true,
        transactions: 0.449,
        walletNum: 'asfavdvadv8896vavasv9as8scSC554CSCzcz',
    },
    {
        time: '08:23',
        date: '18 дек 2018',
        status: true,
        transactions: 0.449,
        walletNum: 'asfavdvadv8896vavasv9as8scSC554CSCzcz',
    },
];

export default function Transactions() {
    return (
        <div class="w-full h-full bg-white-light p-7">
            <div class="flex flex-row justify-between">
                <span class="font-black text-xl">
                    Транзакции
                </span>
                <button class="p-0.5 font-light hover:shadow-sm hover:opacity-80 hover:underline hover:decoration-inherit ">
                    ПОСМОТРЕТЬ ВСЕ
                </button>
            </div>
            <div class="flex justify-between text-xs text-gray-cool pr-20 ">
                <span>ВСЕ </span> <span>ОТПРАВЛЕННЫЕ</span>
                <span>ПРИНЯТЫЕ</span>
            </div>
            <hr class="text-gray-cool" />
            <div class="flex overflow-auto justify-center h-full">
                <div>{testTransactions.map(Transaction)}</div>
            </div>
        </div>
    );
}

function Transaction({
    time,
    date,
    status,
    transactions,
    walletNum,
}) {
    return (
        <div class="bg-gray-light w-full h-18 mt-2 pb-2 overflow-x-auto whitespace-nowrap text-sm">
            <span class="pt-3 pl-5 pr-5 flex justify-between text-gray-dashed">
                {time}, {date}
                <img
                    class="h-4 mx-2"
                    src={asset(
                        `transactionsIcon/${
                            status ? 'right.png' : 'left.png'
                        }`,
                    )}
                />
                {transactions} FTД
            </span>
            <span class="justify-start p-5">{walletNum}</span>
        </div>
    );
}
