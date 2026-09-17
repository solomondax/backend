import Profile from "../features/Auth/pages/Profile";
import Register from "../features/Auth/pages/Register"; 
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Register/>
  },
    {
    path:'/profile',
    element:<Profile/>
  }
])

export default router