interface IWalletCard {
    mas: MasType
}

type MasType = Array<ObjectWalletCard>

export type ObjectWalletCard = {
    tokenName: string;
    tokenImage: string;
    tokenValueXLM: number;
    tokenValueEuro: number;
    date: string;
}

export const masTest: MasType = [
    {
        tokenName: 'POLISVILLA1',
        tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        tokenValueXLM: 345.0,
        tokenValueEuro: 704.1,
        date: '24.12.23',
    },
    {
        tokenName: 'POLISVILLA2',
        tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        tokenValueXLM: 345.2,
        tokenValueEuro: 704.1,
        date: '24.12.23',
    },
    {
        tokenName: 'POLISVILLA3',
        tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        tokenValueXLM: 345.0,
        tokenValueEuro: 704.1,
        date: '24.12.23',
    },
    {
        tokenName: 'POLISVILLA4',
        tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        tokenValueXLM: 345.0,
        tokenValueEuro: 704.1,
        date: '24.12.23',
    },
    {
        tokenName: 'POLISVILLA5',
        tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        tokenValueXLM: 345.0,
        tokenValueEuro: 704.1,
        date: '24.12.23',
    },
]

export default function WalletComponent () {
    return(
        <div className="bg-white-light flex flex-col justify-center items-center w-full h-full">
            <div className="w-full" style={{display: 'flex', flex: 0.5}}>
                <span className="text-2xl ml-4 pt-4 font-medium">Мой кошелёк</span>
            </div>
            <div className={`w-full overflow-scroll`} style={{display: 'flex', flex:3}}>
                <Wallet mas={masTest}/>
            </div>
            <div className="w-full flex flex-col pl-5 pt-4" style={{display: 'flex', flex:0.5}}>
                <div className="flex flex-row justify-center items-center">
                    <span className="text-xs flex justify-start items-center" style={{display: 'flex', flex: 1}}>Общий баланс</span>
                    <span className="text-green-dark flex justify-start items-center" style={{display: 'flex', flex: 1}}>+12% за неделю</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <span className="text-2xl font-medium flex justify-start items-center"  style={{display: 'flex', flex: 1}}>2237.93€</span>
                    <span className="text-2xl font-medium text-yellow-orange flex justify-start items-center" style={{display: 'flex', flex: 1}}>415 XLM</span>
                </div>
            </div>
            <div className="flex justify-center items-center w-full" style={{display: 'flex', flex: 1}}>
                <button className="w-[calc(90%)] h-[calc(42px)] bg-gray-dark text-white-light rounded-lg font-light hover:opacity-80">ПОПОЛНИТЬ КОШЕЛЕК</button>
            </div>
        </div>
    )
}

function Wallet (props: IWalletCard ) {
    const {mas} = props
    console.log(mas.length/2 === 0)
    return(
        <div className="flex flex-wrap ml-2 pr-4">
            {mas.map((info => (
                 <WalletCard {...info}/>
            )))}
        {mas.length / 2 !== 0 &&<div className="w-[calc(12rem)] h-[calc(8.5rem)] bg-white-light mt-2 ml-2 flex-auto"/>}
        </div>
    )
}

function WalletCard (props : ObjectWalletCard) {
    const {tokenName, tokenImage, tokenValueXLM, tokenValueEuro, date} = props
    return(
        <div className="w-[calc(12rem)] h-[calc(8.5rem)] bg-dark-midnight mt-2 ml-2 flex-auto hover:opacity-90">
            <div className="flex flex-row justify-between pl-4 pr-4 pt-4" style={{display: 'flex', flex: 1}}>
                <span className="text-white-light">{tokenName}</span>
                <img src={tokenImage} className="w-[calc(36px)] h-[calc(36px)]"/>
            </div>
            <div className="pl-4" style={{display: 'flex', flex: 1}}>
                <span className="text-3xl text-white-light">{tokenValueXLM}</span>
            </div>
            <div className="flex justify-between pl-4 pr-4" style={{display: 'flex', flex: 1}}>
                <span className="text-gray-dashed">{tokenValueEuro}€</span>
                <span className="text-gray-dashed">до{date}</span>
            </div>
        </div>
    )
}