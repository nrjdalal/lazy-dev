import Link from 'next/link'

export default function Page() {
  return (
    <div className="prose container max-w-screen-lg py-24">
      <div className="flex justify-between">
        <p>Not Found</p>
        <p>Version 0.0.1-alpha</p>
      </div>

      <h1>Looks like you are navigating!</h1>

      <p>
        But <Link href="/">home</Link> is always a better place to be.
      </p>
    </div>
  )
}
