import axios from 'axios'
import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi'
import { toast } from 'react-toastify'

import { Box } from '@app/components/box'
import { Button } from '@app/components/button'
import { Input } from '@app/components/input'

import { auth } from '@app/core/services/musics-top/auth'
import { changeToken } from '@app/core/slices/userSlice'

export function Login() {

  const dispatch = useDispatch();

  const [ email, setEmail ] = useState<string>('');
  const [ emailError, setEmailError ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ passwordError, setPasswordError ] = useState<string>('');
  const [ isVisiblePassword, setIsVisiblePassword ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    clearErrors();

    const req = await auth.login(email, password);

    if (axios.isAxiosError(req) && req.response.data) {
      const data = req.response.data;

      if (data.errors && data.errors.email) setEmailError(req.response.data.errors.email[0]);
      if (data.errors  && data.errors.password) setPasswordError(req.response.data.errors.password[0]);
      if (data.error) toast.error(data.error);

      setIsLoading(false);
      return;
    }

    if (req) {
      dispatch(changeToken(req.access_token));
    }
    
    setIsLoading(false);
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const IconRight = () => (
    <button 
      type='button' 
      className='absolute right-5 cursor-pointer'
      onClick={() => setIsVisiblePassword(!isVisiblePassword)}
    >
      {
        !isVisiblePassword
        ? <FiEye className='text-2xl text-first' />
        : <FiEyeOff className='text-2xl text-first' />
      }
    </button>
  )

  return (
    <div className='flex-1 flex justify-center items-center'>
      <Box className='max-w-sm w-full -mt-20 py-10'>
        <form onSubmit={send}>
          <h2 className='text-lg mb-5 font-medium flex justify-center items-center gap-3 text-first'>
            <FiLock className='text-2xl' />
            Fazer Login
          </h2>

          <div className='flex flex-col gap-3 mb-10'>
            <Input 
              layout='completed'
              options={{
                label: 'E-mail:',
                error: emailError,
              }}
              type='email'
              placeholder='Digite seu e-mail...' 
              value={email} 
              onChange={event => setEmail(event.target.value)} 
            />

            <Input 
              layout='completed'
              options={{
                label: 'Senha',
                error: passwordError,
                iconRight: <IconRight />
              }}
              type={!isVisiblePassword ? 'password' : 'text'} 
              placeholder='Digite sua senha...' 
              className='pr-14' 
              value={password}
              onChange={event => setPassword(event.target.value)} 
            />
          </div>

          <Button className='w-full mb-5' isLoading={isLoading}>
            <p className='font-medium text-gray-800 dark:text-gray-200'>Logar-se</p>
          </Button>

          <p className="text-center text-gray-800 dark:text-gray-300">
            Você não tem cadastro? <Link to='/register' className='text-blue-500 hover:underline'>Clique Aqui</Link>
          </p>
        </form>
      </Box>
    </div>
  );
}
