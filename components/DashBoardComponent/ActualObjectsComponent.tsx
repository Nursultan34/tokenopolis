import { CardObjectComponent, IObjectInfo, ITokenObject } from "./generalComponent/CardObjectComponent.tsx"
import { css, tw } from "twind/css";
import { UpCardComponent } from "./generalComponent/UpCardComponent.tsx";
export type DataType = {
    testObjectInfo?: IObjectInfo;
    testObjectToken?: ITokenObject;
}
export function ActualObjectComponent (props: DataType) {
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
            <UpCardComponent first="Актуальные объекты" second="ГОТОВНОСТЬ" three="ТОКЕНЫ" typeCard="all"/>
            <div className={`mt-2 h-5/6 overflow-auto ${tw(scrollbarStyle)} pl-2`}>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'} objectInfo={props.testObjectInfo} cardType={"all"} tokenObject={props.testObjectToken} readiness={80}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'} objectInfo={props.testObjectInfo} cardType={"all"} tokenObject={props.testObjectToken} readiness={80}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'} objectInfo={props.testObjectInfo} cardType={"all"} tokenObject={props.testObjectToken} readiness={80}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'} objectInfo={props.testObjectInfo} cardType={"all"} tokenObject={props.testObjectToken} readiness={80}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'} objectInfo={props.testObjectInfo} cardType={"all"} tokenObject={props.testObjectToken} readiness={80}/>
                <CardObjectComponent objectImage={'https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp'} objectInfo={props.testObjectInfo} cardType={"all"} tokenObject={props.testObjectToken} readiness={80}/>
            </div>
        </div>
    )
}
