import { Github } from 'lucide-react'
import Link from 'next/link'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose container max-w-screen-lg py-24">
      <div className="flex justify-between">
        <p>Home</p>
        <p className="flex gap-4">
          Version 0.0.1-alpha{' '}
          <Link href="https://github.com/nrjdalal/lazy-dev" target="_blank">
            <Github />
          </Link>
        </p>
      </div>
      {children}
    </div>
  )
}
