import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '@config/store'
import { changeScreen, changeScrollTop } from '@slices/AppSlice'

import { App } from './app'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

window.onscroll = function () {
  store.dispatch(changeScrollTop(window.scrollY));
};

window.onresize = function () {
  store.dispatch(changeScreen({
    width: window.screen.width,
    height: window.screen.height,
  }));
}
