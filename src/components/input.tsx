import { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

export type Props = {
  layout?: 'basic' | 'completed';
  options?: {
    label?: string;
    error?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
  };
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ layout = 'basic', options, className, ...rest }: Props) {
  switch (layout) {
    case 'completed':
      return (
        <label>
          <span className='text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block'>{options?.label}</span>
          <div className='relative flex items-center'>
            {options?.iconLeft}
            <input 
              className={clsx('p-3 px-5 w-full outline-none border-2 border-stone-200 bg-transparent dark:border-stone-800 text-gray-800 dark:text-gray-200', className)} 
              {...rest}
            />
            {options?.iconRight}
          </div>
          {options?.error && (
            <span className='text-sm font-medium text-red-500 mt-1'>{options.error}</span>
          )}
        </label>
      );
    default:
      return (
        <input 
          className={clsx('p-3 px-5 w-full outline-none border-2 border-stone-200 bg-transparent dark:border-stone-800 text-gray-800 dark:text-gray-200', className)} 
          {...rest}
        />
      );
  }
}
