import { createRoot } from 'react-dom/client'
import './index.css'
import Todolist from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Todolist />
  </>,
)
