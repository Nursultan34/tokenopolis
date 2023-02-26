import NightThemeSwitcher from "@/islands/NightThemeSwitcher.tsx";
import AddressView        from "@/islands/AddressView.tsx";

export default function DashboardHeader({ data }: { data: { address: string, name: string }}) {
    return <header class="h-24 row children:(items-center row h-full gap-x-3) font-light justify-between">
        <div class="gap-x-5">
            <h1 class="text-2xl">Панель управления</h1>
            <input class="w-72 h-8 lk-input" type="text" placeholder="Поиск по сайту..." />
            <NightThemeSwitcher />
        </div>
        <div>
            <AddressView address={data.address} />
            <img
                class="w-10 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
            />
            <span class="font-bold">{data.name}</span>
        </div>
    </header>;
}
