import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/products", element: <Products></Products> },
            { path: '/contact', element: <Contact></Contact> },
            {path:'/about', element:<About></About>}
        ]
    },
    {
        path: "*",
        element: <h1 className="w-full h-screen text-center">Not Found 404 !!!</h1>
    }
])


export default router;