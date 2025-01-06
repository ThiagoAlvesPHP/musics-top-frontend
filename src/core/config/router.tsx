import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthLogin } from '@app/components/auth-login';

import { ThemeBase } from '@containers/theme/base';

import { Home } from '@views/home'
import { Login } from '@views/login';
import { Register } from '@views/register';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ThemeBase />}>
          <Route index path="/" element={<Home />} />
          <Route 
            path='/login' 
            element={(
              <AuthLogin>
                <Login />
              </AuthLogin>
            )} 
          />
          <Route 
            path='/register' 
            element={(
              <AuthLogin>
                <Register />
              </AuthLogin>
            )} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
