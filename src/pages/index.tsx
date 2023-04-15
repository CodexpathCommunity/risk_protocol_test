import PairSelector from '@/components/PairSelector'
import StaticChat from '@/components/StaticChat'
import TokenHeader from '@/components/TokenHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" min-h-screen  p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by selecting a pair token&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/codexpathCommunity"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/myAvatar.jpeg"
              alt="Vercel Logo"
              className="dark:invert"
              width={30}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className='p-6 flex'>
          {/* left */}
        <div className='flex-1 mr-10'>
          {/* top */}
          <TokenHeader />
          <StaticChat/>
          {/* market caps */}
        </div>
        {/* right */}
        <div >
          {/* pair token select */}
          <PairSelector />
        </div>
      </div>

   
    </main>
  )
}
