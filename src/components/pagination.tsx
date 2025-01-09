import { ReactNode } from "react";
import clsx from "clsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export type Props<T> = {
  data?: T[];
  render?: (item: T, index: number, arr: T[]) => ReactNode;
  notFoundText?: string;
  className?: string;
  qtdDots?: number;
  currentPage?: number;
  pages?: number;
  isLoading?: boolean;
  isNextPage?: boolean;
  isPrevPage?: boolean
  onGo?: (page: number) => void;
};

export function Pagination<T>({ 
  data, 
  render, 
  notFoundText = 'Nenhum dado encontrado!', 
  className, 
  qtdDots = 3, 
  currentPage, 
  pages, 
  isLoading, 
  isNextPage, 
  isPrevPage, 
  onGo 
}: Props<T>) {
  if (!data || !render) return <></>;

  const sideLimit = Math.round((qtdDots - 1) / 2);

  return (
    <div className="">
      <div className={clsx('flex', className)}>
        {(data.length > 0 && !isLoading) &&
          data.map((item, index) => render(item, index, data))
        }

        {(data.length === 0 && !isLoading) && (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            {notFoundText}
          </p>
        )}
      </div>

      {currentPage && (
        <div className="mt-3 flex justify-between items-center">
          <p className="text-md text-gray-500 dark:text-gray-300">Página {currentPage} de {pages}</p>

          <div className="flex gap-3">
            <button 
              className="btn-pagination"
              role="prev"
              onClick={() => {
                if (onGo && currentPage && isPrevPage) {
                  onGo(currentPage - 1);
                }
              }}
            >
              <FiChevronLeft className='text-2xl' />
            </button>

            {Array(pages).fill(0).map((_, index) => {
              index = index + 1;

              if (
                index < (currentPage - sideLimit) ||
                index > (currentPage + sideLimit)
              )
                return;

              return (
                <button 
                  className={clsx('btn-pagination', {
                    'bg-blue-500 border-blue-500 text-white': index === currentPage,
                  })}
                  onClick={() => {
                    if (onGo && index !== currentPage) {
                      onGo(index);
                    }
                  }}
                  key={index}
                >
                  {index < 10 ? '0' + index : index}
                </button>
              );
            })}

            <button 
              className="btn-pagination"
              role="next"
              onClick={() => {
                if (onGo && currentPage && isNextPage) {
                  onGo(currentPage + 1);
                }
              }}
            >
              <FiChevronRight className='text-2xl' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
