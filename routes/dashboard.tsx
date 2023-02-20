import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies }          from "https://deno.land/std@v0.171.0/http/cookie.ts";
import { redirectTo }          from "#/utils.ts";
import * as stellar            from "#/stellar.ts";
import { getUser }             from "#/db.ts";
import { checkCookieAuth }     from "#/auth.ts";
import { asset }               from "$fresh/runtime.ts";
import NightThemeSwitcher      from "@/islands/NightThemeSwitcher.tsx";
import AddressView             from "@/islands/AddressView.tsx";
import { Chart } from "$fresh_charts/mod.ts";

// Data that the dashboard needs
interface DashboardData {
  name: string;
  address: string;
  transactions: any; // TODO: set type to JSX
  balances: {
    xlm: number,
    pcn: number,
  }
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const cookies = getCookies(req.headers);
    const email = await checkCookieAuth(cookies);
    if (email) {
      // As we checked the JWT, non-existence of the user is impossible
      const privKey = await getUser(email).then($ => $![2]);
      const name = await getUser(email).then($ => $![0]);
      const keypair = stellar.Keypair.fromSecret(privKey);
      // Get the balances list
      const balances = await stellar.loadAccount(keypair.publicKey())
                                    .then(stellar.getBalances)
                                    .catch(e => [])
                                    .then(selectBalances);
      const transactions = [false, false, true, false, true].map($ => (
        <div class="bg-dark-700 p-3 w-full h-20 text-xs flex flex-col justify-between">
          <div class="flex flex-row justify-between">
            <span>16:23, 12 дек 2018</span>
            <span class="flex flex-row gap-x-2">
              <img src={asset($ ? "/incoming-arrow.svg" : "/outcoming-arrow.svg")} />
              0,009 БТД
            </span>
          </div>
          <span class="text-gray-600 mx-2">
            1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB
          </span>
        </div>
      ));
      return ctx.render({ name, address: keypair.publicKey(), balances, transactions });
    } else { return redirectTo("/login") }
  },
};

// FIXME (getBalances)
// Selects XLM and PCN balance values from the balance list
function selectBalances(balances: [string, number][]): { xlm: number; pcn: number } {
  const xlm_predicate = (b: AnyObj) => b.asset_type == "native";
  const pcn_predicate = (b: AnyObj) => (b.asset_type == "credit_alphanum4" &&
                                       b.asset_code == "PCN" &&
                                       b.asset_issuer == "ASSET_ISSUER"); // TODO: get the asset issuer from the config
  return {
    xlm: balances.find(xlm_predicate)?.balance ?? 0,
    pcn: balances.find(pcn_predicate)?.balance ?? 0,
  };
}

export default function Dashboard({data}: PageProps<DashboardData>) {
  return (
    <main class="pr-8 pl-28 dark:bg-[rgba(0,0,0,0)] bg-[#E6E6E6]">
      <div class="flex fixed left-0 flex-col items-center py-5 w-20 h-full bg-dark-800">
        <img src={asset("/lk-logo.svg")} />
      </div>
      <header class="h-24 flex flex-row children:(items-center flex flex-row h-full gap-x-3) font-light justify-between">
        <div class="gap-x-10">
          <h1 class="text-2xl">Панель управления</h1>
          <input class="w-72 h-8 lk-input" type="text" placeholder="Поиск по сайту..."/>
          <NightThemeSwitcher />
        </div>
        <div>
          <AddressView address={data.address} />
          <img class="w-10 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg" />
          <span class="font-bold">{data.name}</span>
        </div>
      </header>
      {/* Left/Right part */}
      <div class="flex flex-row h-[calc(100vh-8rem)] w-full gap-5 children:(w-full h-full)">
        {/* Left Top/Bottom part */}
        <div class="flex flex-col gap-5 children:(w-full h-full)">
          {/* Left Top part */}
          <div class="flex children:(w-full h-full rounded-sm) flex-row gap-x-5">
            <DashboardEntry basis="31%" classes="bg-dark-700 p-6! relative">
              <div class="flex flex-row justify-between items-center p-6 m-1 mx-3 mb-6 rounded-sm bg-yellow">
                <div>
                  <div class="mb-5 font-bold text-dark-750">POLISCOIN</div>
                  <span class="text-2xl font-light">221 746</span>
                </div>
                <img src={asset("/poliscoin-logo.svg")} class="h-9" />
              </div>
              <div class="mb-3 text-xs font-medium text-gray-650">Текущий баланс</div>
              <div>
                <span class="text-5xl font-light"> 3.4330 </span>
                <span class="relative right-2 bottom-8 font-bold text-yellow">EUR</span>
              </div>
              <span class="mt-8 text-xs font-bold absolute bottom-6">
                Годовой доход <span class="text-yellow">+12%</span>
              </span>
            </DashboardEntry>
            <DashboardEntry name="ОТПРАВИТЬ" basis="24%" classes="children:mb-3">
              <select class="p-3 lk-input" name="type">
                <option value="pcn">PCN</option>
                <option value="xlm">XLM</option>
              </select>
              <h3 class="text-xs font-bold">АДРЕС ПОЛУЧАТЕЛЯ</h3>
              <input class="p-2 lk-input" name="dest" type="text" placeholder="1Cs4wu6pu5qCZ35bSLNVzG.." />
              <span class="flex flex-row gap-x-2">
                <h3 class="text-xs font-bold leading-10">КОЛИЧЕСТВО</h3>
                <input class="p-2 w-1/2 appearance-textfield lk-input" name="amount" type="number" step="0.000001" value="0.233455" />
              </span>
              <div class="flex justify-center w-full mt-6">
                <button class="py-1 px-8 rounded-2xl border-2 border-yellow mx-auto">ОТПРАВИТЬ</button>
              </div>
            </DashboardEntry>
            <DashboardEntry name="АКТУАЛЬНЫЕ ОБЪЕКТЫ" basis="45%">
              <div class="w-full scroll overflow-y-scroll h-[calc(100%-4.5rem)] children:mb-3">
                <div class="flex flex-row gap-x-4 items-center">
                  <img class="rounded-full w-10 h-10" src={asset("/96.png")} />
                  <span class="font-light text-base">81%</span>
                  <span class="text-gray-650 font-medium">Вилла в Добра Вода</span>
                </div>
                <div class="flex flex-row gap-x-4 items-center">
                  <img class="rounded-full w-10 h-10" src={asset("/96.png")} />
                  <span class="font-light text-base">12%</span>
                  <span class="text-gray-650 font-medium">Гостиница в Печурице</span>
                </div>
                <div class="flex flex-row gap-x-4 items-center">
                  <img class="rounded-full w-10 h-10" src={asset("/96.png")} />
                  <span class="font-light text-base">7%</span>
                  <span class="text-gray-650 font-medium">Ремонт квартиры в Баре</span>
                </div>
              </div>
            </DashboardEntry>
          </div>
          {/* Left Bottom part */}
          <div class="flex children:(w-full h-full) flex-row gap-x-5">
            <DashboardEntry name="График PCN/XLM" basis="31%">
              {/* <Chart type="line"
                  options={{
                  devicePixelRatio: 1,
                  scales: {
                  y: {
                  ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value: number, index, ticks) {
                  return `${value/1000}K`;
                  },
                  beginAtZero: true,
                  major: { enabled: false }
                  }
                  }
                  }
                  }}
                  data={{
                  labels: ["", "", "23 окт", "", "", "", "", "", "", "6 ноя", "", ""],
                  datasets: [{
                  label: "Sessions",
                  data: [3000, 3500, 3050, 5000, 3080, 7000, 10000, 15000, 17000, 10000, 12000, 15000],
                  borderColor: "#F4C500",
                  backgroundColor: transparentize(ChartColors.Red, 0.5),
                  borderWidth: 1,
                  }],
                  }}/> */}
            </DashboardEntry>
            <DashboardEntry basis="40%" name="КАЛЕНДАРЬ СОБЫТИЙ">
              <div>
                <div class="flex flex-row justify-between font-light">
                  <span>
                    <span class="text-4xl">14 </span> ФЕВРАЛЯ
                  </span>
                  <span class="text-3xl">11:45</span>
                </div>
                <div class="text-sm text-gray-450 my-3"> ОКОНЧАНИЕ СТРОИТЕЛЬСТВА ВИЛЛЫ </div>
                <hr class="text-gray-500 mx-1 mb-4" />
              </div>
              <div>
                <div class="flex flex-row justify-between font-light">
                  <span>
                    <span class="text-4xl">14 </span> ФЕВРАЛЯ
                  </span>
                  <span class="text-3xl">11:45</span>
                </div>
                <div class="text-sm text-gray-450 my-3"> ОКОНЧАНИЕ СТРОИТЕЛЬСТВА ВИЛЛЫ </div>
                <hr class="text-gray-500 mx-1 mb-4" />
              </div>
            </DashboardEntry>
            <DashboardEntry name="рынок" basis="32.5%">
            </DashboardEntry>
          </div>
        </div>
        {/* Right Top/Bottom part */}
        <div class="flex flex-col w-full h-full" style="flex-basis: 30%">
          {/* Right Top part */}
          <div class="bg-dark-750 pt-5 px-5" style="flex-basis: 65%">
            <h1 class="text-xl font-light ml-3 mb-4">ТРАНЗАКЦИИ</h1>
            <div class="children:mb-3">
              { data.transactions }
            </div>
          </div>
          {/* Right Bottom part */}
          <div class="" style="flex-basis: 35%">
          </div>
        </div>
      </div>
      {/* <div>
          Кошелек:
          {data.address}
          </div>
          <div>
          Балансы: <br/>
          XLM: {data.balances.xlm}<br/>
          PCN: {data.balances.pcn}
          </div> */}
    </main>
  );
}

function DashboardEntry({children, name, classes, basis}) {
  return <div class={`bg-dark-750 pt-5 px-7 ${classes ?? ""}`} style={`flex-basis: ${basis}`}>
    { name == undefined ? <></> :
      <h1 class="text-xl font-light relative right-2 mb-4">{name}</h1>
    }
    { children }
  </div>
}
