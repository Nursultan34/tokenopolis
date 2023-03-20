import { asset } from "$fresh/runtime.ts";

export interface IPersonFirstData {
    img: string
    firstName: string
    lastName: string
}

export interface IPersonSecondData {
    birthday: string
    registrationDay: string
    email: string
    extraEmail: string
    phoneNumber: string
    extraPhoneNumber: string
    country: string
    city: string
}

export interface IPersonData {
    personFirstData: IPersonFirstData
    personSecondData: IPersonSecondData
    about: string
}


export default function MyProfile() {
    const personDate: IPersonData = {
        personFirstData: {
            img: "/pfp.png",
            firstName: "Никита Решетеев",
            lastName: "Resheteev"
        },
        personSecondData: {
            birthday: "15.05.1995",
            city: "Москва",
            country: "Россия",
            email: "nikita.resheteev@gmail.com",
            extraEmail: "resheteev@yandex.ru",
            extraPhoneNumber: "955 987-65-43",
            phoneNumber: "922 123-45-67",
            registrationDay: "02.02.2023"
        },
        about: "В меру упитанный мужчина в самом расцвете сил."
    }

    return (
        <div class="w-[39vw] col justify-between px-[56px] pt-[42px] pb-[80px] bg-white text-darkGray">
            <div class="col">
                <span class="text-2xl font-bold">Мой профиль</span>
                <span class="text-sm">Личная информация</span>
                <PersonPhoto data={personDate.personFirstData}/>
            </div>
            <PersonInfo data={personDate.personSecondData} />
            <div class="relative col">
                <span class="text-xs">О СЕБЕ</span>
                <span class="ml-4 mt-2 pr-6 text-lg overflow-auto">{personDate.about}</span>
                <img class="absolute bottom-0 right-0 cursor-pointer" src={asset("/profile/edit.svg")} alt="icon" />
            </div>
        </div>
    );
}

function PersonPhoto({data}: {data: IPersonFirstData}) {
    return (
        <div class="row mt-5 items-center">
            <div class="relative w-[210px]">
                <img class="rounded-full" src={asset(data.img)} alt="photo" />
                <img class="absolute bottom-3 right-0 cursor-pointer" src={asset("/profile/frame.svg")} alt="icon" />
            </div>
            <div class="col ml-9">
                <span class="text-4xl font-bold">{data.firstName}</span>
                <span class="text-2xl font-bold mt-3">{data.lastName}</span>
            </div>
        </div>
    );
}

function PersonInfo({data}: {data: IPersonSecondData}) {
    const labelArray: string[] = [
        'ДАТА РОЖДЕНИЯ',
        'ДАТА РЕГИСТРАЦИИ',
        'ЭЛЕКТРОННАЯ ПОЧТА',
        'ДОПОЛНИТЕЛЬНАЯ ЭЛЕКТРОННАЯ ПОЧТА',
        'ТЕЛЕФОН',
        'ДПОЛНИТЕЛЬНЫЙ ТЕЛЕФОН',
        'СТРАНА',
        'ГОРОД'
    ]
    const countryArray: string[] = ['Россия', 'Черногория', 'Израиль']
    const cityArray: string[] = ['Москва', 'Тэль-авив', 'Баку']
    
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, auto))", justifyContent: "space-between", rowGap: "0.5rem" }}>
            {labelArray.map((label, index) => {
                if (index <= 1) {
                    return (
                        <div class="col">
                            <span class="text-xs">{label}</span>
                            <input class="profile-selin" type="date" />
                        </div>
                    );
                } else if (index <= 5) {
                    return (
                        <div class="col">
                            <span class="text-xs">{label}</span>
                            <input class="profile-selin" type="text" />
                        </div>
                    );
                } else if (index === 6) {
                    return (
                        <div class="col">
                            <span class="text-xs">{label}</span>
                            <select class="profile-selin">{countryArray.map(county => <option>{county}</option>)}</select>
                        </div>
                    );
                } else {
                    return (
                        <div class="col">
                            <span class="text-xs">{label}</span>
                            <select class="profile-selin">{cityArray.map(city => <option>{city}</option>)}</select>
                        </div>
                    );
                }
            })}
        </div>
    );
}