import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Aplication from "../Pages/Aplication";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import Appdetails from "../Pages/Appdetails";
import AppNotFound from "../Pages/AppNotFound";


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
        },
        {
          path:"Appdetails/:id",
          Component: Appdetails,
        },
        {
          path:"/AppNotFound",
          Component: AppNotFound,
        }
        
    ]
  },
]);

export default router;
