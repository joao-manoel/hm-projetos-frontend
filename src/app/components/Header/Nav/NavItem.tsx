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
          font-bold hover:underline
        "
      >{title}</li>
    </Link>
  )
}