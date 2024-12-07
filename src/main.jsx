import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Wallpaper from './Wallpaper'
import About from './About'
import Our_Team from './Our_Team'

 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
   
      
  </StrictMode>,
)
