import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Login from './Pages/Login.tsx'
import Register from './Pages/Register.tsx'
import ErrorPage from './Components/ErrorPage.tsx'

import Success from './Pages/Success.tsx'
import Questions from './Pages/Questions.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/question",
        element: <Questions />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     
   <RouterProvider router={router} />
  
  </StrictMode>,
)
