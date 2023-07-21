import { ReactNode } from "react";

interface SectionRootProps {
  children: ReactNode
}

export function SectionRoot({children}: SectionRootProps) {
  return (
    <section
      className="
        w-full h-[180px] relative -top-28
        px-10 xl:px-36  hidden md:flex
      "
    >

      <div
        className="
          w-full h-full
        bg-white  rounded-3xl shadow-lg 
        "
      >
        <ul
          className="
            overflow-hidden
            h-full
            flex justify-around items-center
          "
        >
          {children}
        </ul>
      </div>
    </section>
  )
}