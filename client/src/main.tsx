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

// Import TanStack Query (React Query)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// Optional: Import the dev tools (typically only in development)
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* ReactQueryDevtools - remove in production or conditionally render based on environment */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)