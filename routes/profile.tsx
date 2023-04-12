import MyProfile from '../islands/MyProfile.tsx';
import MySetting from '../islands/MySetting.tsx';
import Security from '../islands/Security.tsx';
import ProgressBarComponent from '../islands/ProgressBar.tsx';
import * as R from 'https://deno.land/x/ramda@v0.27.2/mod.ts';

interface Notification {
    date: string;
    time: string;
    desc: string;
}

export default function ProfileScreen() {
    return (
        <div class="row flex-wrap px-16 pt-8 bg-gray-white justify-between box-border">
            <MyProfile />
            <div
                class="w-[42vw]"
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(2, minmax(0, auto))',
                    gap: '1.25rem',
                }}
            >
                <MySetting />
                <Security />
                <NotificationComponent />
                <ProgressBarComponent />
            </div>
        </div>
    );
}

function NotificationComponent() {
    const notifications: Notification[] = R.repeat(
        {
            date: '18/02/23',
            time: '14:05',
            desc: 'Пятьдесят восемь инвесторов получили свои первые дивиденды. Поздравляем!',
        },
        10,
    );

    return (
        // Rewrite this using Tailwind builtin sizes
        <div class="w-9/12 h-[10%] border-b border-gray-dashed pb-4 col justify-between">
            <span class="w-9/12 text-darkGray text-2xl font-bold">
                Уведомления
            </span>
            <div class="w-9/12 h-[71%] border-y border-gray-dashed py-4 col mt-4 overflow-auto">
                {notifications.map((notification) => (
                    <Notification notification={notification} />
                ))}
            </div>
        </div>
    );
}

function Notification({
    notification,
}: {
    notification: Notification;
}) {
    return (
        <div class="col bg-gray-white rounded-sm my-1 px-3">
            <div class="row justify-between">
                <span class="text-base">
                    {notification.date}
                </span>
                <span class="text-base">
                    {notification.time}
                </span>
            </div>
            <span class="text-xs">{notification.desc}</span>
        </div>
    );
}
