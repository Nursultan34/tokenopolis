import {Handlers, PageProps} from '$fresh/server.ts';
import {asset} from '$fresh/runtime.ts';
import ObjectsTable from '@/islands/ObjectsTable.tsx';

import {getCookies} from 'https://deno.land/std@v0.171.0/http/cookie.ts';
import {assertLoggedIn} from '#/auth.ts';
import {getObjects, getUser} from '#/db.ts';
import * as stellar from '#/stellar.ts';
import {
    const_,
    getFstImage,
    getImages,
    mayFail,
} from '#/utils.ts';
import screenWrapper from '#/screenWrapper.tsx';
import * as R from 'https://deno.land/x/ramda@v0.27.2/mod.ts';

const objectsData = [
    {
        name: 'Soho kompleks, Montenegro',
        number: '40494',
        name: '1Soho kompleks, Montenegro',
        number: 1,
        cost: '285,14',
        tokenCost: '35,7',
        investors: '135',
        square: '75',
        date: '12-2023',
        profitability: '12,4',
        imgs: '/',
        status: 'sell',
        images: ['/photos/photo1.svg', '/photos/photo2.svg'],
        favorite: false,
        invested: 2000,
        percent: 82,
        reqInvestments: 120000,
        isMyObject: false,
        tokenName: 'ALPHATOKEN1',
        tokenImg: '/token-image.png',
    },
    {
        name: 'Soho kompleks, Bar',
        number: '40494',
        name: '2Soho kompleks, bar',
        number: 2,
        cost: '285,14',
        tokenCost: '35,7',
        investors: '135',
        square: '75',
        date: '12-2023',
        profitability: '12,4',
        imgs: '/',
        status: 'hit',
        images: ['/photos/photo1.svg', '/photos/photo2.svg'],
        favorite: true,
        invested: 120000,
        percent: 50,
        reqInvestments: 120000,
        isMyObject: false,
        tokenName: 'ALPHATOKEN2',
        tokenImg: '/token-image.png',
    },
    {
        name: 'Super puper Soho kompleks, Budva',
        number: '40494',
        name: '3Soho kompleks, Tivat',
        number: 3,
        cost: '285,14',
        tokenCost: '35,7',
        investors: '135',
        square: '75',
        date: '12-2023',
        profitability: '12,4',
        imgs: '/',
        status: 'sell',
        images: ['/photos/photo1.svg', '/photos/photo2.svg'],
        favorite: true,
        invested: 2093,
        percent: 100,
        reqInvestments: 120000,
        isMyObject: true,
        tokenName: 'ALPHATOKEN3',
        tokenImg: '/token-image.png',
    },
    {
        name: 'Soho kompleks, Montenegro',
        number: '40494',
        name: '4Soho kompleks, Podgorica',
        number: 4,
        status: 'sell',
        cost: '285,14',
        tokenCost: '35,7',
        investors: '135',
        square: '75',
        date: '12-2023',
        profitability: '12,4',
        images: ['/photos/photo1.svg', '/photos/photo2.svg'],
        imgs: '/',
    },
    {
        name: 'Soho kompleks, Montenegro',
        number: '40494',
        cost: '285,14',
        tokenCost: '35,7',
        investors: '135',
        square: '75',
        date: '12-2023',
        profitability: '12,4',
        status: 'sold',
        images: ['/photos/photo1.svg', '/photos/photo2.svg'],
        imgs: '/',
    },
    {
        name: 'Soho kompleks, Montenegro',
        number: '40494',
        cost: '285,14',
        tokenCost: '35,7',
        investors: '135',
        square: '75',
        date: '12-2023',
        profitability: '12,4',
        imgs: '/',
        status: 'sold',
        images: ['/photos/photo1.svg', '/photos/photo2.svg'],
        favorite: false,
        invested: 50000,
        percent: 11,
        reqInvestments: 120000,
        isMyObject: true,
        tokenName: 'ALPHATOKEN4',
        tokenImg: '/token-image.png',
    },
];

export const handler: Handlers = {
    GET: mayFail(async (req, ctx) => {
        const cookies = getCookies(req.headers);
        const email = await assertLoggedIn(cookies);
        const user = (await getUser(email))!;
        const name = user.name;
        const keypair = stellar.Keypair.fromSecret(user.wallet);

        // Get the balances list
        const balances = await stellar.server
            .loadAccount(keypair.publicKey())
            .then(stellar.getBalances)
            .catch(const_([]));
        const objects = (await getObjects()).map((o) => ({
            images: getImages('objects', o.id),
            tokenImg: asset(getFstImage('tokens', o.tokenName)),
            ...o,
        }));
        console.log(objects);
        return ctx.render({
            name,
            valXLM: 600,
            valEUR: 1234,
            address: keypair.publicKey(),
            objects,
        });
    }),
};

export default function Objects({data: {objects}}) {
    return screenWrapper(
        <main class="h-screen">
            <ObjectsTable objects={objects} />
        </main>,
    );
}
