import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

export type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={clsx('h-[52px] px-10 bg-blue-300 dark:bg-blue-800 transition-animation hover:bg-blue-500', className)}
      {...rest}
    >
      {children}
    </button>
  );
}
