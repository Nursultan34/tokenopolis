import { css, tw } from "twind/css"
import { ActualObjectComponent } from "./ActualObjectsComponent.tsx"
import { CalendarComponent } from "./CalendarComponent.tsx"
import { IObjectInfo, ITokenObject } from "./generalComponent/CardObjectComponent.tsx"
import { MyObjectComponent } from "./MyObjectComponent.tsx"
import { MyWalletComponent } from "./MyWalletComponent.tsx"
import { TransactionsComponent } from "./TransactionsComponent.tsx"

export function DashboardComponent () {
    const gridStyle = css`grid-column-start: 1; grid-column-end: 3; grid-auto-rows: 50px`
    const testObjectInfo: IObjectInfo = {
        numberObject: '40494',
        objectName: 'Montenegro, Soho komleks',
        objectLocate: 'Tivat 85320, Montenegro'
    }
    
    const testObjectToken: ITokenObject = {
        tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
        tokenName: 'ALFATOKEN',
        minXlm: 'min 8XLM',
        payCount: 135,
    }
    
    return(
        <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 auto-cols-max auto-rows-max w-full h-full p-5">
            <div className={`bg-black ${tw(gridStyle)}`}>
                <ActualObjectComponent testObjectInfo={testObjectInfo} testObjectToken={testObjectToken}/>
            </div>
            <div className="bg-white">
                <MyWalletComponent/>
            </div>
            <div className={`${tw(gridStyle)} flex flex-row`}>
                <div style={{display: 'flex', flex: 3, backgroundColor: 'red'}}>
                    <MyObjectComponent testObjectToken={testObjectToken} testObjectInfo={testObjectInfo}/>
                </div>
                <div style={{display: 'flex', flex: 2, marginLeft: 15}}>
                    <CalendarComponent/>
                </div>
            </div>
            <div className="bg-white">
                <TransactionsComponent />
            </div>
        </div>
    )
}