import clsx from 'clsx'

export type Props = {
  checked?: boolean;
  onChecked?: () => void;
}

export function Switch({ checked, onChecked }: Props) {
  return (
    <button 
      className={clsx('w-12 h-6 rounded-full transition-animation', {
        'bg-gray-100': !checked,
        'bg-blue-300': checked,
      })}
      onClick={onChecked}
    >
      <span 
        className={clsx('w-6 h-6 bg-white block rounded-full scale-110 shadow-lg transition-animation', {
          'translate-x-full': checked,
        })} 
      />
    </button>
  );
}
