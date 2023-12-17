import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { router } from './configs/routes.config'
import { Provider } from 'react-redux'
import store from './store'


const browserRouter = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={browserRouter} />
  </Provider>,
)
