import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddCategories from "../../Pages/Dashboard/AddCategories/AddCategories";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import ProductLists from "../../Pages/ProductLists/ProductLists";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import UpdateProduct from "../../Pages/Dashboard/MyProducts/UpdateProduct";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import AdminSellerRoute from "../AdminSellerRoute/AdminSellerRoute";

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
                path:'/dashboard/addcategories',
                element:<AdminRoute><AddCategories></AddCategories></AdminRoute>
            },
            {
                path:'/dashboard/all-users', 
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/all-sellers', 
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/all-buyers', 
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/add-products', 
                element:<AdminSellerRoute><AddProducts></AddProducts></AdminSellerRoute>
            },
            {
                path:'/dashboard/my-products', 
                element:<AdminSellerRoute><MyProducts></MyProducts></AdminSellerRoute>
            }
        ]
    }
])

export default router;