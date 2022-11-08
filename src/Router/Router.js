import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Header/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/Nav";
import SignIn from "../Pages/SignIn/SignIn";
import Header, { SignUp } from "../Pages/SignUp/SignUP";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Pages/Main/Main");
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/nav',
                element: <Nav></Nav>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    }
])