import {asset} from '$fresh/runtime.ts';
import {css, tw} from 'twind/css';

import screenWrapper from '@/lib/screenWrapper.tsx';

export default function Faq() {
    return screenWrapper(
        <article class="w-full h-screen row gap-4">
            <div class="bg-white-dark w-1/2 h full rounded-sm">
                <FaqSection />
            </div>
            <div class="w-1/2 h-full col gap-4">
                <div class="bg-white-dark w-full h-1/3 rounded-sm relative">
                    <InfoSection />
                </div>
                <div class="bg-white-dark w-full h-2/3 rounded-sm">
                    <ArticlesSection />
                </div>
            </div>
        </article>,
    );
}

function FaqSection() {
    const questions = [
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Как инвестировать через личный кабинет?',
            answer: '',
        },
        {
            title: 'Как выбрать подходящий объект?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
        {
            title: 'Что такое токены и для чего они нужны?',
            answer: '',
        },
    ];
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
        <section class="pt-[3vh] pl-[2vw]">
            <h2
                class="font-bold"
                style="font-size:calc(0.7vw + 0.7vh + 0.5vmin);"
            >
                Частые вопросы
            </h2>
            <div class="col items-start mt-[1.5vh] mr-4 h-full">
                <div
                    class={`w-full h-[75vh] col items-start gap-[1vh] overflow-y-scroll ${tw(
                        scrollbarStyle,
                    )}`}
                >
                    {questions.map((question) => (
                        <div
                            class="bg-gray-light rounded cursor-pointer"
                            style="width: calc(22vw + 22vh + 12vmin);"
                        >
                            <div class="row justify-between p-[2vh] pr-8">
                                <h3
                                    class="font-bold"
                                    style="font-size:calc(0.6vw + 0.6vh + 0.3vmin);"
                                >
                                    {question.title}
                                </h3>
                                <img
                                    src={asset('cross.svg')}
                                    class="w-[1.3vw]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function InfoSection() {
    return (
        <section class="row justify-around">
            <div
                class="w-[50%] py-[3vh]"
                style="font-size:calc(0.5vw + 0.5vh + 0.6vmin);"
            >
                <p class="mb-[1vh] w-[140%]">
                    Мы собрали большинство вопросов, которые
                    задают наши клиенты. Но если вы не нашли
                    ответ на свой вопрос, напишите нам по адресу:{' '}
                    <span class="font-bold underline">
                        info@tokenopolis.biz
                    </span>
                </p>
                <p class="mb-2.5">
                    Либо обратитесь к вашему менеджеру
                </p>
                <button
                    class="w-[14vw] h-[5vh] px-[0.5vw] py-[0.5vh] bg-yellow-orange rounded-lg uppercase focus:outline-none"
                    style="font-size: calc(0.4vw + 0.4vh + 0.4vmin);"
                >
                    задать вопрос
                </button>
            </div>
            <img
                src={asset('contact-vector.svg')}
                class="w-[10vw]"
            />
        </section>
    );
}

function ArticlesSection() {
    const articles = [
        {
            title: 'Что такое токены? для чего они нужны и какие токены бывают?',
            img: 'plug.png',
            href: '',
        },
        {
            title: 'Как инвестировать через личный кабинет?',
            img: 'plug.png',
            href: '',
        },
        {
            title: 'Как инвестировать через личный кабинет?',
            img: 'plug.png',
            href: '',
        },
        {
            title: 'Как выбрать подходящий объект?',
            img: 'plug.png',
            href: '',
        },
        {
            title: 'Что такое токены? для чего они нужны и какие токены бывают?',
            img: 'plug.png',
            href: '',
        },
        {
            title: 'Что такое токены? для чего они нужны и какие токены бывают?',
            img: 'plug.png',
            href: '',
        },
        {
            title: 'Что такое токены? для чего они нужны и какие токены бывают?',
            img: 'plug.png',
            href: '',
        },
    ];
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
        <section class="py-[3vh] px-[2.5vw]">
            <h2
                class="font-bold mb-[1.5vh]"
                style="font-size:calc(0.7vw + 0.7vh + 0.5vmin);"
            >
                Обучающие статьи
            </h2>
            <div
                class={`w-full h-[46vh] col gap-[1vh] overflow-y-scroll ${tw(
                    scrollbarStyle,
                )}`}
            >
                {articles.map((article) => (
                    <a href={article.href}>
                        <div class="w-[36vw] h-[10vh] row items-center justify-start border border-gray-cool rounded">
                            <img
                                src={asset(article.img)}
                                class="w-[4vw] m-[0.5vw]"
                            />
                            <p class="w-[56%] uppercase mr-[7vw]">
                                {article.title}
                            </p>
                            <img
                                src={asset('arrow-article.svg')}
                                class="w-[2vw]"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
