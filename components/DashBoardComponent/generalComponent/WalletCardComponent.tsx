import WalletCard from "../../../islands/WalletCard.tsx"

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
export function WalletComponent (props : IWalletCard) {
    const {mas} = props
    console.log(mas.length/2 === 0)
    return(
        <div className="flex flex-wrap ml-2 pr-4">
            {mas.map((info => (
                 <WalletCard {...info}/>
            )))}
        {mas.length / 2 !== 0 &&<div className="w-[calc(12rem)] h-[calc(8.5rem)] bg-white mt-2 ml-2 flex-auto"/>}
        </div>
    )
}