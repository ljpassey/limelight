import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className=" rounded-lg  px-2 py-2  text-slate-700 hover:bg-lime-500 hover:text-white"
    >
      {children}
    </Link>
  )
}
