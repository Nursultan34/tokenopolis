import AdminObjects from "../../components/admin/AdminObjects.tsx";
import adminWrapper from "../../lib/adminWrapper.tsx";

export default function ObjectsAdminScreen () {
    return adminWrapper (
        <main class="w-full h-full">
            <article class="h-[5%]">
                <section class="text-lg font-bold">Объекты в работе</section>
            </article>
            <article class="bg-white-light flex h-[95%]">
                <div class="flex-auto w-[75%]">
                    <AdminObjects/>
                </div>
                <div class="flex-auto bg-yellow-light w-[25%]">
                    
                </div>
            </article>
        </main>
    )
}