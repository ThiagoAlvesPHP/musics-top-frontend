import { useSelector } from 'react-redux';

import { Router } from './core/config/router';
import { RootState } from './core/config/store';

export function App() {
  const mode = useSelector<RootState>(state => state.app.mode);
  return (
    <div className="" data-dark={mode}>
      <Router />
    </div>
  );
}