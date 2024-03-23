import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import Layout from './Components/Layout'
import Home from './Body/Home'
import Heroes from './Body/Heroes'
import Contactus from './Body/ContactUs'


const router = createBrowserRouter([
    {
        path: 'signup',
        element: <SignUp/>
    },
    {
        path: 'login',
        element : <Login/>
    },
    {
        path: 'contact',
        element : <Contactus/>
    },
    {
        path: '/',
        element : <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '',
                element:<Heroes/>
            }
        ]
    }
])




const App = () => {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App