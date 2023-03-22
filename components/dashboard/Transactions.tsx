import { asset } from "$fresh/runtime.ts";

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
    }
]

export default function Transactions () {
    return(
        <div class="w-full h-full bg-white-light">
            <div class="flex flex-row justify-between pl-8 pr-8 pt-4" style={{flex: 1}}>
                <span class="font-medium text-2xl">Транзакции</span>
                <button class="bg-gray-dark rounded-md text-sm text-white-light font-light w-[calc(40%)] hover:opacity-80">ПОСМОТРЕТЬ ВСЕ</button>
            </div>
            <div class="flex justify-start pl-8 pr-20 pt-2" style={{flex: 1}}>
                <div style={{flex: 1}}>
                    <span class="text-xs text-gray-cool">ВСЕ</span>
                </div>
                <div style={{flex: 2}}>
                    <span class="text-xs text-gray-cool">ОТПРАВЛЕННЫЕ</span>
                </div>
                <div style={{flex: 2}}>
                    <span class="text-xs text-gray-cool">ПРИНЯТЫЕ</span>
                </div>
            </div>
            <div class="flex justify-start overflow-auto" style={{flex: 2, height: '80%'}}>
				<div class="w-full pt-2 pl-7 pr-7 justify-center items-center">
					{testTransactions.map(Transaction)}
				</div>
            </div>
        </div>
    )
}

function Transaction({ time, date, status, transactions, walletNum }) {
    return(
        <div class="bg-gray-light w-full h-[70px] mt-2">
            <div class="pt-3 pl-5 pr-5 flex justify-between" style={{display: 'flex', flex: 1}}>
                <div>
                    <span class="text-gray-dashed text-sm">{time},</span>
                    <span class="text-gray-dashed text-sm">{date}</span>
                </div>
                <div class="flex flex-row">
                    <img class="w-[28px] h-[24px] mr-2" src={asset(`transactionsIcon/${status ? 'right.png' : 'left.png'}`)}/>
                    <span class="text-gray-dashed">{transactions} FTД</span>
                </div>
            </div>
            <div class="justify-start pl-5" style={{display: 'flex', flex: 1}}>
                <span>{walletNum}</span>
            </div>
        </div>
    )
}
