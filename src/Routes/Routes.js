import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../OthersComponents/AllServices";
import ServiceDetails from "../OthersComponents/ServiceDetails";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
            }
        ]
    }
])

export default router;