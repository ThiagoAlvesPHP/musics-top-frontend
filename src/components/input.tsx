import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

export type Props = {} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props) {
  return (
    <input 
      className={clsx('p-3 px-5 w-full outline-none border-2 border-stone-200 bg-transparent dark:border-stone-800 text-gray-800 dark:text-gray-200', className)} 
      {...rest}
    />
  );
}
