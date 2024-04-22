Check out the [demo](https://lazy-dev.vercel.app/). Shipped to production for demo purposes. But remember, it's a development tool and not meant for production.

# What is LazyDev?

LazyDev is a development tool crafted for use within Next.js or React frameworks, streamlining navigation and bookmarking across pages.

> It's important to note that LazyDev is solely applicable during the development phase and does not ship to production environments.

Currently, users can access a blue button positioned at the bottom right corner of the screen. This button triggers the display of a side menu component, facilitating effortless movement between site pages and providing convenient access to external links crucial for ongoing projects or resource preservation.

---

# Why? What's the idea? And what's next?

- It was always painful to navigate between pages while developing a project. Just when I start to build a new project, I never straightaway start with navigation. I always start with the core functionality and then move to the navigation part. Still I have to navigate between pages to check if everything is working fine. And it's always a pain to navigate between pages via typing. So, I thought of building a tool that will help me navigate between pages easily. And that's how LazyDev was born.

- Then comes the bookmarking part. I always have to open a new tab and search for the resources that I need. And then I have to bookmark them. And then I have to open the bookmarked page to access the resource. Saving and getting back to them is now easy with LazyDev.

### What's next?

- To leverage CLI to easily add this tool to your project.
- To straightaway manage links via UI only and no configs via utilizing local storage to save keys and links. And persist data if user wants to.
- Better UI and UX. Maybe even a better website and pro plans.

> I'm restricting myself to stick just too bookmarks. In future can introduce more features like notes, todos, etc as well. This will make LazyDev a complete dev tool.

- Even community can contribute to this project to make it yours too. Add you ideas (as github issues) and contribute via code.

---

# How to install or add it to my project?

### Prerequisites

- [shadcn/ui](https://ui.shadcn.com/docs/components/sheet) sheet component
- and nothing else

### Steps

1. Create a folder named `lazy-dev` in components
2. Create a component in the given folder `lazy-dev.tsx`. And copy paste the following code.

```tsx
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

      <SheetContent className="flex flex-col gap-6 border-none bg-slate-50 p-4 pt-12">
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
                  <div className="flex w-full flex-wrap items-center justify-between rounded-lg border-[1.5px] bg-white p-3">
                    <p className="truncate text-sm font-medium text-black">
                      {label}
                    </p>
                    <p className="mt-1 truncate text-right text-xs text-blue-500">
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
```

4. Import `LazyDev` in RootLayout and add it within body.

```tsx
import './globals.css'
import LazyDev from '@/components/lazy-dev/lazy-dev'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <LazyDev />
      </body>
    </html>
  )
}
```
