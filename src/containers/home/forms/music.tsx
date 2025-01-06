import { FiPlus } from 'react-icons/fi'

import { Box } from '@app/components/box'
import { Button } from '@app/components/button'
import { Input } from '@app/components/input'

export function HomeFormMusic() {
  return (
    <Box>
      <form action='' className=''>
        <h2 className='mb-3 text-base font-medium text-first'>Sugerir Nova Música</h2>

        <div className='flex'>
          <Input className='border-r-0' placeholder='Cole aqui o link do Youtube...' />
          <Button>
            <FiPlus className='text-2xl text-white' />
          </Button>
        </div>
      </form>
    </Box>
  );
}