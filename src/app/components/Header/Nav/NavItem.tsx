import Link from "next/link";
import { ElementType } from 'react';

interface NavItemProps {
  title: string
  url: string
  Icon: ElementType
}

export function NavItem({title, url, Icon}: NavItemProps) {
  return (
    <Link href={url}>
      <li
        className="
          flex items-center gap-2
          font-bold border-b-2 border-transparent hover:border-zinc-200 text-xl md:text-md transition
          w-fit
        "
      >
        <Icon />
        <span>{title}</span>
      </li>
    </Link>
  )
}