import TransactionsCard, { TransactionsObject } from "../../../islands/TransactionsCard.tsx"

interface ITransactionsCardComponent {
    testMas: Array<TransactionsObject>
}
export function TransactionsCardComponent (props: ITransactionsCardComponent) {
    const {testMas} = props
    return(
        <div className="w-full pt-2 pl-7 pr-7 justify-center items-center">
            {testMas.map((data) => (
                <TransactionsCard {...data} />
            ))}
        </div>
    )
}