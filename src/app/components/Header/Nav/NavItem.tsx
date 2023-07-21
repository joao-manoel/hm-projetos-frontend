import Link from "next/link";

interface NavItemProps {
  title: string
  url: string
}

export function NavItem({title, url}: NavItemProps) {
  return (
    <Link href={url}>
      <li
        className="
          font-bold hover:underline text-xl md:text-md
        "
      >{title}</li>
    </Link>
  )
}