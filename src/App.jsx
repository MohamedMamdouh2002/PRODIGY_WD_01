import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

let routers =createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
  ]}

])
export default function App() {
  return <>
  <RouterProvider router={routers}>

  </RouterProvider>
  
  </>
}