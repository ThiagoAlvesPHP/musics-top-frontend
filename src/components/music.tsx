export type Props = {
  to?: string;
  index?: number;
  title?: string;
  views?: string;
  image?: string;
};

export function Music({ to, index, title, views, image }: Props) {
  return (
    <a href={to} target='_blank' className='bg-stone-100 dark:bg-stone-900 flex items-center'>
      { index &&
        <div className='p-5'>
          <p className='text-4xl font-medium text-first'>
            {index < 10 ? '0' + index : index}
          </p>
        </div>
      }

      <div className='flex-1 py-2'>
        <p className='text-lg font-medium text-first'>
          {title}
        </p>

        <span className='text-gray-500 dark:text-gray-300 text-sm'>
          {views} Visualizações
        </span>
      </div>

      <div className=''>
        <img src={image} alt='' className='h-20 w-20 object-contain bg-black' />
      </div>
    </a>
  );
}
