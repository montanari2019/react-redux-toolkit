import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import './index.css'
import { storeMpark } from './redux/store/store'
// import { store } from './redux/redux-old-school/redux-old-school'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <Provider store={storeMpark}>
      <App />
    </Provider>
  </React.StrictMode>,
)
