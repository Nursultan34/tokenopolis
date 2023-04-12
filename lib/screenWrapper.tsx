import Header from '@/islands/Header.tsx';
import Menu from '@/components/Menu.tsx';

export default function screenWrapper(
    children: any,
    address = '1Cs4wu6pu5qCZ35bSLNVzG..',
    name = 'Nikita Resheteev',
) {
    return (
        <main class="col h-full bg-white-light dark:bg-black text-black dark:text-white-light">
            <Header address={address} name={name} />
            <div class="row h-full">
                <Menu />
                <div class="p-5 bg-gray-back w-full">
                    {children}
                </div>
            </div>
        </main>
    );
}
