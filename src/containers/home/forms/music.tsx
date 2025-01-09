import { FormEvent, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { FiPlus } from 'react-icons/fi'

import { Box } from '@app/components/box'
import { Button } from '@app/components/button'
import { Input } from '@app/components/input'

import { RootState } from '@app/core/config/store'

import { musics } from '@app/core/services/musics-top/musics'
import { toast } from 'react-toastify'

type Props = {
  onAfterSuccessSubmit?: () => void;
}

export function HomeFormMusic({ onAfterSuccessSubmit }: Props) {
  const token = useSelector<RootState>(state => state.user.token);

  const [ url, setUrl ] = useState<string>('');
  const [ urlError, setUrlError ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const req = await musics.create(url);

    if (axios.isAxiosError(req)) {
      if (req.response?.data.errors.url) setUrlError(req.response.data.errors.url[0]);
      setIsLoading(false);
      return;
    }

    if (req) {
      toast.success('Vídeo sugerido!');
      setUrl('');
      
      onAfterSuccessSubmit && onAfterSuccessSubmit();
    }

    setIsLoading(false);
  }

  return (
    <Box>
      <form action='' className='' onSubmit={send}>
        <h2 className='title-box'>Sugerir Nova Música</h2>

        <div className='flex'>
          <Input 
            className='border-r-0 disabled:cursor-not-allowed' 
            placeholder='Cole aqui o link do Youtube...' 
            disabled={token === null}
            value={url}
            onChange={event => setUrl(event.target.value)}
          />
          <Button disabled={token === null} isLoading={isLoading} className='disabled:cursor-not-allowed'>
            <FiPlus className='text-2xl text-white' />
          </Button>
        </div>

        {(token === null || urlError) && (
          <p className="text-sm font-medium text-red-500 mt-1">
            {token === null ? 'Para sugerir você precisa está logado!' : urlError}
          </p>
        )}
      </form>
    </Box>
  );
}