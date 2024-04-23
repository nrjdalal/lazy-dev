Check out the [demo](https://lazy-dev.vercel.app/). Shipped to production for demo purposes. But remember, it's a development tool and not meant for production. :)

# What is LazyDev?

LazyDev is a development tool crafted for use within Next.js or React frameworks, streamlining navigation and bookmarking across pages.

> It's important to note that LazyDev is solely applicable during the development phase and does not ship to production environments.

Currently, users can access a blue button positioned at the bottom right corner of the screen. This button triggers the display of a side menu component, facilitating effortless movement between site pages and providing convenient access to external links crucial for ongoing projects or resource preservation.

![](https://raw.githubusercontent.com/nrjdalal/lazy-dev/main/public/LazyDev-Next-js-React-Dev-Tool-1.png)

![](https://raw.githubusercontent.com/nrjdalal/lazy-dev/main/public/LazyDev-Next-js-React-Dev-Tool-2.png)

---

# Why? What's the idea? And what's next?

- It was always painful to navigate between pages while developing a project. Just when I start to build a new project, I never straightaway start with navigation. I always start with the core functionality and then move to the navigation part. Still I have to navigate between pages to check if everything is working fine. And it's always a pain to navigate between pages via typing. So, I thought of building a tool that will help me navigate between pages easily. And that's how LazyDev was born.

- Then comes the bookmarking part. I always have to open a new tab and search for the resources that I need. And then I have to bookmark them. And then I have to open the bookmarked page to access the resource. Saving and getting back to them is now easy with LazyDev.

### What's next?

- To leverage CLI to easily add this tool to your project.
- To straightaway manage links via UI only and no configs via utilizing local storage to save keys and links. And persist data if user wants to.
- Better UI and UX. Maybe even a better website and pro plans.

> I'm not restricting myself to stick just too bookmarks. In future can introduce more features like notes, todos, etc as well. This will make LazyDev a complete dev tool.

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
--- lazy-dev.tsx ---
```

3. Add links via creating config as `link-manager.ts` in same folder. Here is an example config.

```ts
const LinkManager = [
  {
    title: 'Navigation',
    links: [
      {
        href: '/',
        label: 'Home',
      },
    ],
  },
  {
    title: 'Bookmarks',
    links: [
      {
        href: 'https://github.com/nrjdalal/lazy-dev',
        label: 'LazyDev',
      },
    ],
  },
]

export default LinkManager
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
