import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import { Loading } from './loading';

export type Props = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ isLoading, children, className, ...rest }: Props) {
  return (
    <button
      className={clsx('h-[52px] px-10 bg-blue-300 dark:bg-blue-800 transition-animation hover:bg-blue-500', className)}
      {...rest}
    >
      {isLoading ? <Loading className='w-6 h-6 border-white mt-1' /> : children}
    </button>
  );
}
