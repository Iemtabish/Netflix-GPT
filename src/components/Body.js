import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/> //ROUTING
    },
    {
      path: "/browse",
      element: <Browse/> //ROUTING (npm install -D react-router-dom)
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;