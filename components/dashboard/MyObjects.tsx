import CardObjectComponent from '@/islands/MyCardObject.tsx';
import {css} from 'twind/css';
import {asset} from '$fresh/runtime.ts';

export default function MyObjects({
    testObjectToken,
    testObjectInfo,
}) {
    return (
        <div class="bg-white-light h-full w-full overflow-hidden p-7">
            <div class="flex justify-between">
                <span class="font-bold text-xl">
                    Мои объекты
                </span>
                <div class="font-sm text-gray-dashed">
                    <span class="pr-4">ТОКЕНЫ</span>
                    <span>КОЛИЧЕСТВО</span>
                </div>
            </div>
            <hr class="text-gray-dashed" />
            <div class="overflow-y-scroll h-full">
                {Array(6).fill(
                    <MyObject
                        name="Montenegro, Soho komleks"
                        img="https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"
                        token={testObjectToken}
                        id={123}
                        amount={300}
                        readiness={80}
                        token={{name: 'ALFATOKEN', img: ''}}
                    />,
                )}
            </div>
        </div>
    );
}

function MyObject({id, name, img, token, amount, readiness}) {
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
        <div class="w-full bg-gray-light grid grid-cols-4 gap-2 p-2 m-2 text-xs">
            <img src={img} />
            <div class="text-gray-dark">
                <span>ОБЪЕКТ №{id}</span>
                <br />
                <span class="font-bold">{name}</span>
            </div>
            <div class="flex justify-center items-center">
                <img class="w-2 h-2" src={token.img} />
                <span class="font-light">{token.name}</span>
            </div>
            <div class="flex justify-center items-center">
                <span>{amount}</span>
            </div>
        </div>
    );
}
