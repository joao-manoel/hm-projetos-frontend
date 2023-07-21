'use client'
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
    <nav>
      

      <ul
        className={`        
          gap-4 transition
          text-lg uppercase text-white
           ${isOpen ?
            'flex absolute left-0 right-0 top-0 bottom-0 bg-white justify-center flex-col items-center z-10 text-4xl gap-11 text-black'
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