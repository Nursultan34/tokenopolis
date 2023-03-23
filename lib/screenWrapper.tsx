import Header from '@/islands/Header.tsx'
import Menu from '@/components/Menu.tsx'

export default function screenWrapper(children: any) {
  return (
    <main class='col h-screen w-screen bg-white-light dark:bg-black text-black dark:text-white-light'>
      <div
        class={`h-[10%] flex justify-center items-center`}
        style={{ display: 'flex', flex: 1 }}
      >
        <Header />
      </div>
      <div
        class='row h-[90%]'
        style={{ display: 'flex', flex: 10 }}
      >
        <Menu />
        <div class='h-full w-full p-5'>
          {children}
        </div>
      </div>
    </main>
  )
}
