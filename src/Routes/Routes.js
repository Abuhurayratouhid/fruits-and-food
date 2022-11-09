import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../OthersComponents/AllServices";
import ServiceDetails from "../OthersComponents/ServiceDetails";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/ReviewPage/MyReviews";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/details/:id',
                loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                loader: ()=> fetch(`http://localhost:5000/allServices`)
            },
            {
                path: '/myReviews',
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            },
            {
                path:'/addService',
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            }
        ]
    }
])

export default router;