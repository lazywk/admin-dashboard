import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from './configs/routes.config'

export const isLoginning = !true

const browserRouter = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={browserRouter}/>
  </>,
)
