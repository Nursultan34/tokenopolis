interface IUpCardComponent {
    first: string;
    second: string;
    three: string;
    typeCard:string;
}

export function UpCardComponent (props :IUpCardComponent) {
    return(
        <div className="flex flex-row justify-end items-end h-[calc(3rem)] -mt-2">
            <span style={{display: 'flex', flex: props.typeCard === 'all' ? 2 : 5}} className={`${props.typeCard === 'all' ? 'text-xl' : 'text-base'} font-medium justify-center items-center`}>{props.first}</span>
            <span style={{display: 'flex', flex: 1, marginLeft: props.typeCard === 'all' ? 120 : 100}} className={`justify-center items-center text-gray-dashed ${props.typeCard === 'all' ? 'text-sm' :'text-xs'}`}>{props.second}</span>
            <span style={{display: 'flex', flex: 1, marginLeft: props.typeCard === 'all' ? 40 : 40}} className={`justify-end items-center text-gray-dashed ${props.typeCard === 'all' ? 'text-sm' :'text-xs'} `}>{props.three}</span>
            <span style={{display: 'flex', flex: 2}} className="justify-end items-center"></span>
        </div>
    )
}