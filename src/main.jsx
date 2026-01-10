import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import RecipeCard from './RecipeCard'
import MenuCard from './MenuCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header className='header' >
        <h1>The Delicious Resturant</h1>
    </header>
      <MenuCard/>
  </StrictMode>,
)
