import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Connexion from './pages/Connexion'
import User from './pages/User'
import ErrorPage from './pages/ErrorPage'
import store from './redux/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Login',
    element: <Connexion />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/*',
    element: <Connexion />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <User />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
