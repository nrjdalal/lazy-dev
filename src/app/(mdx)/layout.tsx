export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose container max-w-screen-lg py-24">
      <div className="flex justify-between">
        <p>Home</p>
        <p>Version 0.0.1-alpha</p>
      </div>
      {children}
    </div>
  )
}
