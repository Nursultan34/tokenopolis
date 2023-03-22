import AdminObjectsCard from "../../islands/AdminObjectsCard.tsx";

export interface ObjectDataType {
    image: string;
    tokenImage: string;
    number: number;
    name: string;
    start: string;
    finish: string;
    location: string;
    priceEuro:number;
    priceXLM:number;
    token: string;
    investors:number;
}

const ObjectData: ObjectDataType[] = [
    {
        image: 'https://www.imufa.ru/images/2019/03/17/fotka3.jpg',
        tokenImage: 'https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png',
        number: 12703,
        name: 'Montenegro, Soho komleks',
        location: 'Tivat 85320, Montenegro',
        priceEuro: 2345,
        priceXLM: 100,
        token: 'ALFATOKEN',
        investors: 123,
        start: '10.02.2023',
        finish: '12.02.2023',
        
    },
    {
        image: 'https://www.imufa.ru/images/2019/03/17/fotka3.jpg',
        number: 12703,
        tokenImage: 'https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png',
        name: 'Montenegro, Soho komleks',
        location: 'Tivat 85320, Montenegro',
        priceEuro: 2345,
        priceXLM: 100,
        token: 'ALFATOKEN',
        investors: 123,
        start: '10.02.2023',
        finish: '12.02.2023',
    },
    {
        image: 'https://www.imufa.ru/images/2019/03/17/fotka3.jpg',
        number: 12703,
        tokenImage: 'https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png',
        name: 'Montenegro, Soho komleks',
        location: 'Tivat 85320, Montenegro',
        priceEuro: 2345,
        priceXLM: 100,
        token: 'ALFATOKEN',
        investors: 123,
        start: '10.02.2023',
        finish: '12.02.2023',
    },
    {
        image: 'https://www.imufa.ru/images/2019/03/17/fotka3.jpg',
        number: 12703,
        tokenImage: 'https://coinspot.io/wp-content/uploads/2020/03/bitcoin.svg_.png',
        name: 'Montenegro, Soho komleks',
        location: 'Tivat 85320, Montenegro',
        priceEuro: 2345,
        priceXLM: 100,
        token: 'ALFATOKEN',
        investors: 123,
        start: '10.02.2023',
        finish: '12.02.2023',
    }
]

export default function AdminObjects () {
    return (
        <div class="w-full h-full">
            <Section/>
            <div class="pl-6 pr-6">
             {ObjectData.map(AdminObjectsCard)}
            </div>
        </div>
    )
}

function Section () {
    return(
        <section class="w-full h-[5%] flex">
            <div class="w-[30%]  flex items-center justify-center"></div>
            <div class="w-[15%]  flex items-center justify-center">цены €/токен</div>
            <div class="w-[15%]  flex items-center justify-center">старт/финиш</div>
            <div class="w-[10%]  flex items-center justify-center">токен</div>
            <div class="w-[10%]  flex items-center justify-center">Инвесторы</div>
            <div class="w-[20%]  flex items-center justify-center"></div>
        </section>
    )
}