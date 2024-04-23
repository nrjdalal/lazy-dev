import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="container prose max-w-screen-lg py-24">
      <div className="flex justify-between">
        <p>Not Found</p>
        <p className="flex gap-4">
          Version 0.0.1-alpha{' '}
          <Link href="https://github.com/nrjdalal/lazy-dev" target="_blank">
            <Github />
          </Link>
        </p>
      </div>

      <h1>Looks like you are navigating!</h1>

      <p>
        But <Link href="/">home</Link> is always a better place to be.
      </p>
    </div>
  )
}
