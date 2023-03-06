import { ObjectWalletCard } from "../components/DashBoardComponent/generalComponent/WalletCardComponent.tsx"

function WalletCard (props : ObjectWalletCard) {
    const {tokenName, tokenImage, tokenValueXLM, tokenValueEuro, date} = props
    return(
        <div className="w-[calc(12rem)] h-[calc(8.5rem)] bg-darkGray mt-2 ml-2 flex-auto hover:opacity-90">
            <div className="flex flex-row justify-between pl-4 pr-4 pt-4" style={{display: 'flex', flex: 1}}>
                <span className="text-white">{tokenName}</span>
                <img src={tokenImage} className="w-[calc(36px)] h-[calc(36px)]"/>
            </div>
            <div className="pl-4" style={{display: 'flex', flex: 1}}>
                <span className="text-3xl text-white">{tokenValueXLM}</span>
            </div>
            <div className="flex justify-between pl-4 pr-4" style={{display: 'flex', flex: 1}}>
                <span className="text-gray-dashed">{tokenValueEuro}€</span>
                <span className="text-gray-dashed">до{date}</span>
            </div>
        </div>
    )
}

export default WalletCard