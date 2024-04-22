import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import LinkManagerData from './link-manager'

const LazyDev = () => {
  // if (process.env.NODE_ENV !== 'development') return null

  return (
    <Sheet>
      <SheetTrigger className="fixed right-0 top-3/4 z-50 flex flex-col items-center justify-center rounded-l-md bg-blue-500 py-2.5 pl-1 pr-0.5 font-mono text-xs text-white">
        <svg
          className="h-5 w-5 -rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span className="-rotate-90">v</span>
        <span className="-mt-1.5 -rotate-90">e</span>
        <span className="-mt-1.5 -rotate-90">D</span>
        <span className="-mt-1 -rotate-90">y</span>
        <span className="-mt-1.5 -rotate-90">z</span>
        <span className="-mt-1.5 -rotate-90">a</span>
        <span className="-mt-1.5 -rotate-90">L</span>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-6 border-none bg-slate-50 p-4">
        <p className="font-medium text-blue-500">LazyDev</p>
        <div className=" -mt-4 h-0.5 w-full bg-slate-200" />

        {LinkManagerData?.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-y-4 text-black">
            <div>
              <p className="text-center font-medium">{title}</p>
            </div>

            <div className="flex w-full flex-col gap-y-3">
              {links.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                >
                  <div className="flex w-full flex-wrap items-center justify-between gap-1 rounded-lg border-[1.5px] bg-white p-3">
                    <p className="truncate text-sm font-medium text-black">
                      {label}
                    </p>
                    <p className="truncate text-right text-xs text-blue-500">
                      {href}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  )
}

export default LazyDev
