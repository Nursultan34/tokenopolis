# Токенополис

Проект использует [Full-stack фреймворк Fresh](https://fresh.deno.dev/), который в свою очередь использует Front-end фреймворк [Preact](https://preactjs.com/) (быстрая и
легковесная альтернатива React) и [CSS-фреймворк Twind](https://twind.style/) (быстрая и легковесная альтернатива [Tailwind CSS](https://tailwindcss.com/)).

## Острова и компоненты

По умолчанию, весь контент рендерится на стороне сервера. В директории routes/ находятся все роуты. Handler-функции могут позволяют выполнять разные действия при разных видах
запросов (GET, POST) или же просто отвечать чем-то, помимо HTML. Если нужно отвечать только HTML, то мы просто пишем компонент с export default и именем роута в PascalCase.

В директории components/ находятся SSR-компоненты

В директории islands/ находятся компоненты, которые рендерятся на клиентской стороне. Если компоненту необходима интерактивность, то он называется островом (island) и находится в
islands/

## Пути

В файле import_map.json находится карта импортов, здесь добавлены два пункта, которые могут использоваться в импортах в коде:

- @/ = корень проекта
- #/ = @/lib/

В директории lib/ находятся интерфейсы над более низкими API. Пример: функция для добавления пользователей

## Twind

Конфиг Twind хранится в twind.config.ts и имеет такой же формат, как и Tailwind

Используем [синтаксис группирования стилей](https://twind.style/grouping-syntax)

Если понадобится использовать один и тот же набор стилей много раз, то можно добавить `` "my-class": apply`p-3 text-gray-600 bg-yellow` `` в раздел plugins конфига. Где my-class -
имя класса, который будет заменять обозначенный далее набор классов. Пример с CSS-стилями в конфиге есть

TODO: Экспортировать ВСЕ цвета из макетов Figma в конфиг для удобного обращения

## Запуск

Для запуска проекта понадобится [Deno](https://deno.land/). [Инструкция по установке Deno.](https://deno.land/manual@v1.30.3/getting_started/installation) Redis-сервер
настраивается в #/db.ts. Сейчас используется удаленный сервис app.redislabs.com. Планируется переход на PostgreSQL

Команда для запуска проекта на 8000 порту

```
deno task start
```

После этого вы можете перейти на http://localhost:8000/dashboard Если вы не аутентифицированы, то произойдет перенаправка на /login

По всем вопросам к [@unsafe_andrew в Телеграме](https://t.me/unsafe_andrew)

Figma:
https://www.figma.com/file/JoMcuqAUV7k0HfLd3EJFVr/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%A2%D0%BA%D0%B0%D1%87%D1%83%D0%BA's-team-library?node-id=0%3A1&t=cElKzeUUCFnIAgzx-0
