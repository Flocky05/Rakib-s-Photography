import AboutMe from "../Pages/AboutMe/AboutMe";
import AddService from "../Pages/AddServices/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Header/Home";
import DetailPage from "../Pages/Home/Services/Detailpage/DetailPage";
import Services from "../Pages/Home/Services/Services";
import MyReview from "../Pages/MyReview/myReview";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/Nav";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUP";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Pages/Main/Main");
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/nav",
        element: <Nav></Nav>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: <DetailPage></DetailPage>,
        loader: ({ params }) =>
          fetch(
            `https://rakibs-photography-server.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivetRoute>
            <MyReview></MyReview>
          </PrivetRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivetRoute>
            <AddService></AddService>
          </PrivetRoute>
        ),
      },
      {
        path: "/aboutme",
        element: <AboutMe></AboutMe>,
      },
    ],
  },
]);
