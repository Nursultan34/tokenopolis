import { asset } from '$fresh/runtime.ts'
import screenWrapper from '@/lib/screenWrapper.tsx'

export default function Manager() {
  return screenWrapper(
    <article class='flex gap-5 bg(gray-light) w-full h-full text-black pb-11'>
      <div class='col gap-5 w-[43%] h-[894px] ml-16 mt-10'>
        <FirstSection />
        <SecondSection />
      </div>
      <div class='col gap-5 mt-10 w-[42%]'>
        <ThirdSection />
        <FourthSection />
      </div>
    </article>
  )
}

function FirstSection() {
  return (
    <div class='bg(white-dark) w-[98%] h-[65%] rounded-sm shadow-lg shadow-black/15  py-10 px-14'>
      <div class='col gap-6 w-full h-full'>
        <div class='row w-[88%] h-[60%] gap-6'>
          <div class='w-72 rounded-sm'>
            <img src={asset('manager-ava.png')} class='object-contain' />
          </div>

          <div class='col items-start mt-36'>
            <div class='col w-72 h-24 gap-3'>
              <h1 class='text-4xl font-bold'>Сергей Ольховский</h1>
              <p class='text-lg'>Менеджер</p>
            </div>

            <div class='flex justify-end items-start w-48 h-14 gap-2 mt-12'>
              <div class='bg(green-btn) w-24 h-16 flex justify-center items-center rounded-lg'>
                <img src={asset('phone.svg')} />
              </div>
              <div class='bg(blue-btn) w-24 h-16 flex justify-center items-center rounded-lg'>
                <img src={asset('telegram.svg')} />
              </div>
            </div>
          </div>
        </div>

        <div class='w-[84%] text-lg '>
          <p>
            На рынке недвижимости Черногории с 2017 года. Курирует строительство
            объектов недвижимости страны, сопровождает сделки купли-продажи.
            Даст компетентную консультацию по любым вопросам инвестиций в
            криптовалюте.
          </p>
        </div>
      </div>
    </div>
  )
}

function SecondSection() {
  return (
    <div class='w-[98%] h-[34%] bg(white-dark) rounded-sm shadow-lg shadow-black/15 relative'>
      <div class='w-[65%] pt-11 pl-16'>
        <h2 class='text-2xl font-bold mb-2.5'>Контакты</h2>
        <div class='w-full row gap-3.5 uppercase text-sm leading-[160%]'>
          <div class='w-40 h-28'>
            <p>Телефон:</p>
            <p>Электронная почта:</p>
            <p>Адрес:</p>
          </div>
          <div class='w-72 h-32'>
            <p>123-456-7890</p>
            <p>info@tokenopolis.biz</p>
            <p>Черногория,</p>
            <p>г. Тиват,</p>
            <p>ул. Строителей, 8</p>
          </div>
        </div>
      </div>
      <img
        src={asset('contact-vector.svg')}
        class='w-52 h-52 absolute right-16 top-11'
      />
    </div>
  )
}

function ThirdSection() {
  return (
    <div class='bg(white-dark) w-full h-[33%] rounded-sm shadow-lg shadow-black/15 '>
      <div class='col justify-center items-start gap-4 mx-9 my-12'>
        <div class='text-lg w-[94%]'>
          <p>
            Мы собрали большинство вопросов, которые задают наши клиенты на
            странице FAQ.
          </p>
          <p>
            Скорее всего ответ на интересующий вопрос уже подробно описан,
            проверьте, пожалуйста.
          </p>
        </div>
        <button class='border border(yellow-orange) w-72 h-14 text-4xl flex justify-center items-center rounded-lg px-5 py-4'>
          FAQ
        </button>
      </div>
    </div>
  )
}

function FourthSection() {
  return (
    <div class='w-full h-[65%] bg(white-dark) rounded-sm shadow-lg shadow-black/15'>
      <div class='col gap-5 w-[88%] h-[33%] ml-9 mr-[39px] mt-[28px] mb-[11px]'>
        <h2 class='text-2xl font-bold'>О компании</h2>
        <p>
          Мы стремимся обеспечить нашим клиентам выгодное и безопасное
          инвестирование с помощью использования современных технологий и
          прозрачной системы учета.
        </p>
        <p>
          Максимально учитываем интересы и пожелания наших инвесторов, чтобы
          сделать совместную работу максимально выгодной и продуктивной.
        </p>
      </div>

      <h3 class='text-lg font-bold ml-9 mb-5'>Направление деятельности</h3>
      <div class='flex items-center justify-center'>
        <div class='w-10 h-20 flex items-center justify-center'>
          <img src={asset('arrow-left.svg')} />
        </div>

        <div class='flex w-[69%] h-72 border border-[#B8B8B7] rounded'>
          <div class='w-48 h-48 rounded mx-6 my-11'>
            <img src={asset('rectangle.png')} class='object-contain' />
          </div>
          <p class='w-72 h-40 mt-11 mr-6'>
            Инфраструктурные проекты. Работы по прокладке инженерных
            коммуникаций и сетей (свет, водопровод, канализация, дороги),
            строительство и монтаж септиков, ливнёвок.
          </p>
        </div>

        <div class='w-10 h-20 flex items-center justify-center'>
          <img src={asset('arrow-right.svg')} />
        </div>
      </div>
    </div>
  )
}
