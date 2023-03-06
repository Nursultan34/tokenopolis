import { css, tw } from "twind/css"
import { DataType } from "./ActualObjectsComponent.tsx"
import { CardObjectComponent } from "./generalComponent/CardObjectComponent.tsx"
import { UpCardComponent } from "./generalComponent/UpCardComponent.tsx"


export function MyObjectComponent (props: DataType) {
    const scrollbarStyle = css({
        '&::-webkit-scrollbar' : {
            width: '15px',
          },
          '&::-webkit-scrollbar-track' : {
            scrollbarColor: 'white',
            width: '100px',
          },
         '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#FFD600',    
            borderRadius: '2px',       
          }
    })
    return(
        <div className="bg-white h-full w-full pl-5 pr-5 overflow-hidden">
            <UpCardComponent first="Мои объекты" second="ТОКЕНЫ" three="КОЛИЧЕСТВО" typeCard="my"/>
            <div className={`mt-2 h-5/6 overflow-scroll ${tw(scrollbarStyle)} pl-2`}>
            <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'}  cardType={"my"} tokenObject={props.testObjectToken} objectInfo={props.testObjectInfo} countObject={123}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'}  cardType={"my"} tokenObject={props.testObjectToken} objectInfo={props.testObjectInfo} countObject={123}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'}  cardType={"my"} tokenObject={props.testObjectToken} objectInfo={props.testObjectInfo} countObject={123}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'}  cardType={"my"} tokenObject={props.testObjectToken} objectInfo={props.testObjectInfo} countObject={123}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'}  cardType={"my"} tokenObject={props.testObjectToken} objectInfo={props.testObjectInfo} countObject={123}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'}  cardType={"my"} tokenObject={props.testObjectToken} objectInfo={props.testObjectInfo} countObject={123}/>
            </div>
        </div>
    )
}