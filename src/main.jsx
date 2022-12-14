import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import Root from './routes/root'
import Error from './routes/error'
import GlobalStyle from './GlobalStyle'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>
)
