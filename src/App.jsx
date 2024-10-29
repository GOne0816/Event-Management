import './App.css'
import NavBar from './Components/NavBar'
import Welcome from './Components/Welcome'
import Login from './Components/User/login'
import Signup from './Components/User/signup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar /> <Welcome /></>,
    },
    {
      path: "/login",
      element: <><NavBar /> <Login /></>,
    },
    {
      path: "/signup",
      element: <><NavBar /> <Signup /></>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
