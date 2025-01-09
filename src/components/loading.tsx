import clsx from 'clsx'

export type Props = {
  className?: string,
}

export function Loading({ className }: Props) {
  return (
    <span role="loading" className={clsx('loader w-12 h-12 border-4 border-first border-b-transparent', className)}></span>
  );
}
