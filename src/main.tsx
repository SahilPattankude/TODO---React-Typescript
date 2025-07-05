import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.tsx'
import { TodosProvider } from './store/todos.tsx'

ReactDOM.createRoot(document.getElementById('root') as 
HTMLElement).render(
  <React.StrictMode>
    <TodosProvider>
          <App />
    </TodosProvider>
  </React.StrictMode>,
)
