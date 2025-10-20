import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Aplication from "../Pages/Aplication";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            Component: Home,
        },
        {
            path:"/Apps",
            Component: Aplication,
        },
        {
            path:"/installation",
            Component: Installation,
        }
        
    ]
  },
]);

export default router;
