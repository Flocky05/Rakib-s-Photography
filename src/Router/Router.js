import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Header/Home";
import DetailPage from "../Pages/Home/Services/Detailpage/DetailPage";
import Services from "../Pages/Home/Services/Services";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/Nav";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUP";

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
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <DetailPage></DetailPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]

    }
])