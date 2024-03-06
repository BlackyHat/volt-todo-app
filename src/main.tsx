import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

import { App } from '@/components'

import store, { persistor } from '@/redux/store'

import './index.css'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
