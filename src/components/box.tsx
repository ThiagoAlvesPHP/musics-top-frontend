import clsx from "clsx";
import { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
  className?: string;
}

export function Box({ children, className }: Props) {
  return (
    <div className={clsx('p-5 bg-white dark:bg-stone-950', className)}>
      {children}
    </div>
  );
}
