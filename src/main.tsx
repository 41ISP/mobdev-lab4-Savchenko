import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { APIWrapper } from './shared/api/api.wrapper.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIWrapper>
      <RouterProvider router={router}/>
    </APIWrapper>
  </StrictMode>,
)
