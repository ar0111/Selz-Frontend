import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddCategories from "../../Pages/Dashboard/AddCategories/AddCategories";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import ProductLists from "../../Pages/ProductLists/ProductLists";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import UpdateProduct from "../../Pages/Dashboard/MyProducts/UpdateProduct";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products/:id',
                element:<PrivateRoute><ProductLists></ProductLists></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/update/:category/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params}) => fetch(`http://localhost:3000/update/${params.category}/${params.id}`)
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<AddCategories></AddCategories>
            },
            {
                path:'/dashboard/all-users', 
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/add-products', 
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/my-products', 
                element:<MyProducts></MyProducts>
            }
        ]
    }
])

export default router;