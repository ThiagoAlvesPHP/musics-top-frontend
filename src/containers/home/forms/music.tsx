import { useSelector } from 'react-redux'
import { FiPlus } from 'react-icons/fi'

import { Box } from '@app/components/box'
import { Button } from '@app/components/button'
import { Input } from '@app/components/input'

import { RootState } from '@app/core/config/store'

export function HomeFormMusic() {
  const token = useSelector<RootState>(state => state.user.token);

  return (
    <Box>
      <form action='' className=''>
        <h2 className='mb-3 text-base font-medium text-first'>Sugerir Nova Música</h2>

        <div className='flex'>
          <Input 
            className='border-r-0 disabled:cursor-not-allowed' 
            placeholder='Cole aqui o link do Youtube...' 
            disabled={token === null} 
          />
          <Button disabled={token === null} className='disabled:cursor-not-allowed' >
            <FiPlus className='text-2xl text-white' />
          </Button>
        </div>

        {token === null && (
          <p className="text-sm font-medium text-red-500 mt-1">
            Para sugerir você precisa está logado!
          </p>
        )}
      </form>
    </Box>
  );
}