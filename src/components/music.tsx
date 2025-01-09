import clsx from "clsx";

import { MusicStatus } from "@app/core/services/musics-top/musics";

export type Props = {
  to?: string;
  index?: number;
  title?: string;
  views?: string;
  image?: string;
  status?: MusicStatus;
}

export enum StatusText {
  approved = 'Aprovado',
  pending = 'Pendente',
  rejected = 'Rejeitado',
}

export enum StatusColor {
  approved = 'bg-green-500',
  pending = 'bg-blue-500',
  rejected = 'bg-red-500',
}

export function Music({ to, index, title, views, image, status }: Props) {
  return (
    <a href={to} target='_blank' className='bg-stone-100 dark:bg-stone-900 flex'>
      { index &&
        <div className='p-5 flex items-center'>
          <p className='text-4xl font-medium text-first'>
            {index < 10 ? '0' + index : index}
          </p>
        </div>
      }

      <div className='flex-1 p-2 flex flex-col justify-center'>
        <p className='text-lg font-medium text-first'>
          {title}
        </p>

        <div className="w-full flex justify-between items-center">
          <span className='text-gray-500 dark:text-gray-300 text-sm'>
            {views} Visualizações
          </span>

          {status && (
            <span className={clsx('py-1 px-3 block text-sm rounded-full font-medium text-white', StatusColor[status])}>
              {StatusText[status]}
            </span>
          )}
        </div>
      </div>

      <div className='bg-black flex items-center'>
        <img src={image} role="image" alt='' className='h-20 w-20 object-contai' />
      </div>
    </a>
  );
}
