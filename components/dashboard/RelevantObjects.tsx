import {css, tw} from 'twind/css';
import {asset} from '$fresh/runtime.ts';

interface ObjectInfo {
    numberObject: string;
    objectName: string;
    objectLocate: string;
}

interface TokenObject {
    tokenImage: string;
    tokenName: string;
    minXlm: string;
    payCount: number;
}

export interface CardObject {
    img?: string;
    info?: ObjectInfo;
    readiness?: number;
    token?: TokenObject;
    count?: number;
    cardType: string;
}

interface UpCard {
    first: string;
    second: string;
    three: string;
    typeCard: string;
}

export interface DataType {
    testObjectInfo?: ObjectInfo;
    testObjectToken?: TokenObject;
}

export default function RelevantObjects({objects}) {
    const scrollbarStyle = css({
        '&::-webkit-scrollbar': {
            width: '15px',
        },
        '&::-webkit-scrollbar-track': {
            scrollbarColor: 'white',
            width: '100px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#FFD600',
            borderRadius: '2px',
        },
    });
    return (
        <div class="bg-white h-full w-full p-7 overflow-hidden">
            <div class="flex font-sm text-gray-dashed">
                <span class="w-2/5 font-bold text-xl text-black">
                    Актуальные объекты
                </span>
                <span class="w-1/5 flex justify-center">
                    собрано инвестиций
                </span>
                <span class="w-1/5 flex">токены</span>
            </div>
            <div
                class={`h-5/6 overflow-auto ${tw(
                    scrollbarStyle,
                )}`}
            >
                {objects.map(ObjectCard)}
            </div>
        </div>
    );
}

function ObjectCard({
    id,
    name,
    location,
    img,
    investersAmount,
    readiness,
    tokenName,
    tokenImg,
    tokenPrice,
}) {
    const backgroundImage = css`
        background-image: url(${asset(
            '/dashboardIcon/percent.png',
        )});
        background-size: no-repeat;
        background-position: center;
        background-size: cover;
        width: 62px;
        height: 62px;
    `;
    return (
        <div class="w-full bg-gray-light flex items-center p-2 my-2 grid grid-cols-5 gap-2">
            <img class="h-auto" src={img} />
            <div class="flex flex-col text-xs">
                <span class="text-gray-dark">ОБЪЕКТ №{id}</span>
                <span class="text-sm font-semibold">{name}</span>
                <div class="flex">
                    <img
                        class="h-4"
                        src={asset(
                            '/dashboardIcon/location.png',
                        )}
                    />
                    <span class="text-yellow-dark">
                        {location}
                    </span>
                </div>
            </div>
            <div class="flex">
                <div
                    class={`${tw(
                        backgroundImage,
                    )} flex justify-center items-center`}
                >
                    <span class="font-semibold text-lg">
                        {readiness}%
                    </span>
                </div>
            </div>
            <div class="font-light text-sm">
                <img
                    class="m-0.5 w-5 inline-block"
                    src={tokenImg}
                />
                <span>{tokenName}</span>
                <br />
                <span>min {tokenPrice} XLM</span>
                <br />
                <span class="text-green-dark">
                    {investersAmount} УЖЕ КУПИЛИ
                </span>
            </div>
            <div class="flex flex-col justify-center items-center">
                <a
                    href={`/object/${id}`}
                    class="hover:bg-gray-cool p-2"
                >
                    подробнее
                </a>
                <button class="text-sm p-2 bg-yellow-orange font-light hover:bg-yellow-main">
                    ИНВЕСТИРОВАТЬ
                </button>
            </div>
        </div>
    );
}

function UpCardComponent(props: UpCard) {
    return (
        <div class="flex flex-row justify-end items-end h-[calc(3rem)] -mt-2">
            <span
                style={{
                    display: 'flex',
                    flex: props.typeCard === 'all' ? 2 : 5,
                }}
                class={`${
                    props.typeCard === 'all'
                        ? 'text-xl'
                        : 'text-base'
                } font-medium justify-center items-center`}
            >
                {props.first}
            </span>
            <span
                style={{
                    display: 'flex',
                    flex: 1,
                    marginLeft:
                        props.typeCard === 'all' ? 120 : 100,
                }}
                class={`justify-center items-center text-gray-dashed ${
                    props.typeCard === 'all'
                        ? 'text-sm'
                        : 'text-xs'
                }`}
            >
                {props.second}
            </span>
            <span
                style={{
                    display: 'flex',
                    flex: 1,
                    marginLeft:
                        props.typeCard === 'all' ? 40 : 40,
                }}
                class={`justify-end items-center text-gray-dashed ${
                    props.typeCard === 'all'
                        ? 'text-sm'
                        : 'text-xs'
                } `}
            >
                {props.three}
            </span>
            <span
                style={{display: 'flex', flex: 2}}
                class="justify-end items-center"
            ></span>
        </div>
    );
}
