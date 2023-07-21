import { ButtonHTMLAttributes } from 'react'
interface ToggleNav extends ButtonHTMLAttributes<HTMLButtonElement>{
  state: boolean
}

export function ToggleNav({state, ...rest}: ToggleNav) {
  return (
    <button
      {...rest}
      className={`
        ${state? 'bg-white z-30 absolute top-12 right-12' : 'relative z-0'}
        flex-col gap-2 cursor-pointer flex md:hidden
        w-14 h-14 items-center justify-center
      `}
    >
      <div className={`
        transition
        w-12 bg-white h-1 rounded-sm
        ${state && 'rotate-45 translate-y-1 bg-zinc-700'}
      `}></div>
      <div className={`
        ${state ? 'hidden' : ''}
        w-12 bg-white h-1 rounded-sm
      `}></div>
      <div className={`
        transition
        w-12 bg-white h-1 rounded-sm
        ${state && '-rotate-45 -translate-y-2 bg-zinc-700'}
      `}></div>
    </button>
  )
}