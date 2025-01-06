import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi'

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

  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    clearErrors();

    const req = await auth.login(email, password);

    if (axios.isAxiosError(req)) {
      if (req.response?.data.errors.email) setEmailError(req.response.data.errors.email[0]);
      if (req.response?.data.errors.password) setPasswordError(req.response.data.errors.password[0]);
      return;
    }

    if (req) {
      dispatch(changeToken(req.access_token));
    }
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  return (
    <div className='flex-1 flex justify-center items-center'>
      <Box className='max-w-sm w-full -mt-20 py-10'>
        <form onSubmit={send}>
          <h2 className='text-lg mb-5 font-medium flex justify-center items-center gap-3 text-first'>
            <FiLock className='text-2xl' />
            Fazer Login
          </h2>

          <div className='flex flex-col gap-3 mb-10'>
            <label>
              <span className='text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block'>E-mail:</span>
              <Input 
                type='email'
                placeholder='Digite seu e-mail...' 
                value={email} 
                onChange={event => setEmail(event.target.value)} 
              />
              {emailError && (
                <span className='text-sm font-medium text-red-500 mt-1'>{emailError}</span>
              )}
            </label>

            <label>
              <span className='text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block'>Senha:</span>
              <div className='relative flex items-center'>
                <Input 
                  type={!isVisiblePassword ? 'password' : 'text'} 
                  placeholder='Digite sua senha...' 
                  className='pr-14' 
                  value={password}
                  onChange={event => setPassword(event.target.value)} 
                />
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
              </div>
              {passwordError && (
                <span className='text-sm font-medium text-red-500 mt-1'>{passwordError}</span>
              )}
            </label>
          </div>

          <Button className='w-full'>
            <p className='font-medium text-gray-800 dark:text-gray-200'>Logar-se</p>
          </Button>
        </form>
      </Box>
    </div>
  );
}
