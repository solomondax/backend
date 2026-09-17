import { RouterProvider } from "react-router"
import router from "./app.route"
import AuthProvider from "../features/Auth/context/AuthProvider"

function App() {
  return (

    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>

  )
}

export default App 