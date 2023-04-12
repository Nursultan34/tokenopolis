import {asset} from '$fresh/runtime.ts';
import screenWrapper from '@/lib/screenWrapper.tsx';

export default function Manager() {
    return screenWrapper(
        <article class="w-full h-screen flex gap-4 bg-gray-light">
            <div class="w-1/2 h-full col gap-4">
                <div class="w-full h-2/3 bg-white-dark rounded-sm">
                    <ManagerSection />
                </div>
                <div class="w-full h-1/3 bg-white-dark rounded-sm">
                    <ContactSection />
                </div>
            </div>
            <div class="w-1/2 h-full col gap-4">
                <div class="w-full h-1/3 bg-white-dark rounded-sm">
                    <FaqSection />
                </div>
                <div class="w-full h-2/3 bg-white-dark rounded-sm">
                    <AboutSection />
                </div>
            </div>
        </article>,
    );
}

function ManagerSection() {
    return (
        <section class="px-[3vw] py-[4vh]">
            <div class="row mb-4 gap-[1vw]">
                <div
                    class="rounded-sm"
                    style="width: calc(7vw + 7vh + 2vmin);"
                >
                    <img
                        src={asset('manager-ava.png')}
                        class="object-contain"
                    />
                </div>
                <div class="col justify-end gap-[1.2vw]">
                    <div class="col w-40 gap-[0.2vw]">
                        <h1
                            class="font-bold"
                            style="font-size:calc(1vw + 1vh + 0.5vmin);"
                        >
                            Сергей Ольховский
                        </h1>
                        <p style="font-size:calc(0.5vw + 0.5vh + 0.5vmin);">
                            Менеджер
                        </p>
                    </div>
                    <div class="flex justify-end items-start gap-2">
                        <img
                            src={asset('phone.svg')}
                            class="bg(green-btn) w-24 rounded-lg w-[6vw]"
                        />
                        <img
                            src={asset('telegram.svg')}
                            class="bg(blue-btn) w-24 rounded-lg w-[6vw]"
                        />
                    </div>
                </div>
            </div>

            <div style="font-size:calc(0.6vw + 0.6vh + 0.4vmin);">
                <p>
                    На рынке недвижимости Черногории с 2017 года.
                    Курирует строительство объектов недвижимости
                    страны, сопровождает сделки купли-продажи.
                    Даст компетентную консультацию по любым
                    вопросам инвестиций в криптовалюте.
                </p>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section class="row justify-between py-[4vh] pl-[3vw] pr-[4vw]">
            <div className="flex flex-col justify-start items-start w-2/3 gap-[0.5vw]">
                <h2
                    class="font-bold mb-2.5"
                    style="font-size:calc(0.7vw + 0.7vh + 0.5vmin);"
                >
                    Контакты
                </h2>
                <div
                    class="w-full row gap-3.5 uppercase"
                    style="font-size:calc(0.4vw + 0.4vh + 0.5vmin);"
                >
                    <div>
                        <p>Телефон:</p>
                        <p>Электронная почта:</p>
                        <p>Адрес:</p>
                    </div>
                    <div>
                        <p>123-456-7890</p>
                        <p>info@tokenopolis.biz</p>
                        <p>Черногория,</p>
                        <p>г. Тиват,</p>
                        <p>ул. Строителей, 8</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img
                    src={asset('contact-vector.svg')}
                    class="w-[10vw]"
                />
            </div>
        </section>
    );
}

function FaqSection() {
    return (
        <section class="col justify-center items-start gap-[1vw] mx-[2vw] my-[4vh]">
            <div
                class="w-[80%]"
                style="font-size:calc(0.5vw + 0.5vh + 0.5vmin);"
            >
                <p>
                    Мы собрали большинство вопросов, которые
                    задают наши клиенты на странице FAQ.
                </p>
                <p>
                    Скорее всего ответ на интересующий вопрос уже
                    подробно описан, проверьте, пожалуйста.
                </p>
            </div>
            <button
                class="flex justify-center items-center w-[14vw] h-[5vh] border border(yellow-orange) rounded-lg  focus:outline-none"
                style="font-size:calc(0.8vw + 0.8vh + 0.5vmin);"
            >
                FAQ
            </button>
        </section>
    );
}

function AboutSection() {
    return (
        <section class="pl-[2vw] px-[1vw] py-[2vh]">
            <div
                class="col gap-[0.3vw] w-[88%] h-[33%]"
                style="font-size:calc(0.4vw + 0.4vh + 0.4vmin);"
            >
                <h2
                    class="font-bold"
                    style="font-size:calc(0.6vw + 0.6vh + 0.5vmin);"
                >
                    О компании
                </h2>
                <p>
                    Компания активно развивается и ежегодно
                    увеличивает прибыль.
                </p>
                <p>
                    Мы стремимся обеспечить нашим клиентам
                    выгодное и безопасное инвестирование с
                    помощью использования современных технологий
                    и прозрачной системы учета.
                </p>
                <p>
                    Максимально учитываем интересы и пожелания
                    наших инвесторов, чтобы сделать совместную
                    работу максимально выгодной и продуктивной.
                </p>
            </div>
            <h3
                class="font-bold my-[2vh]"
                style="font-size:calc(0.5vw + 0.5vh + 0.3vmin);"
            >
                Направление деятельности
            </h3>
            <div class="flex items-start justify-start gap-[1vw] w-[26vw] h-[26vh] border border(gray-dashed) rounded px-[1.1vw] py-[1.3vw]">
                <div class="rounded-sm">
                    <img
                        src={asset('rectangle.png')}
                        class="object-contain h-[20vh]"
                    />
                </div>
                <div
                    class="w-1/2"
                    style="font-size:calc(0.4vw + 0.4vh + 0.2vmin);"
                >
                    <p>
                        Инфраструктурные проекты. Работы по
                        прокладке инженерных коммуникация и сетей
                        (свет, водопровод, канализация, дороги),
                        строительство и монтаж септиков,
                        ливнёвок.
                    </p>
                </div>
            </div>
        </section>
    );
}
