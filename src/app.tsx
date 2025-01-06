import { useSelector } from 'react-redux';

import { Router } from '@config/router';
import { RootState } from '@config/store';

export function App() {
  const mode = useSelector<RootState>(state => state.app.mode);
  return (
    <div className={`${mode}`}>
      <Router />
    </div>
  );
}