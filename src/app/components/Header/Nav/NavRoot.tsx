'use client'
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { ToggleNav } from "./ToggleNav";

interface NavRootProps {
  children: ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleToggleNav = () => {
    setOpen(!isOpen)
  }

  return (
    <nav >

      <Image
        className={`
          ${isOpen ? 'flex md:hidden' : 'hidden'}
          absolute z-20 left-14 top-14
        `}

        src="/images/icone.png"
        alt=""
        width={52}
        height={52}
      />

      <ul
        className={`        
          gap-4 transition
          text-lg uppercase text-white
           ${isOpen ?
            'flex absolute md:relative left-0 right-0 top-0 bottom-0 bg-white md:bg-transparent justify-center flex-col md:flex-row items-center z-10 text-4xl gap-11 text-zinc-700 md:text-white'
            :
            'hidden md:flex'
          }
        `}
      >
        {children}
      </ul>

      <ToggleNav
        onClick={handleToggleNav}
        state={isOpen}
      />
    </nav>
  )
}