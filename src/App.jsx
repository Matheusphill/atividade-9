import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  }
])