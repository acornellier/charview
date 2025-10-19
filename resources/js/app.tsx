import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './components/Root'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
