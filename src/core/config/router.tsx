import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@views/home'
import { ThemeBase } from '@containers/theme/base';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ThemeBase />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
