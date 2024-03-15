import AboutPage from "../components/AboutPage";
import Blog from "../components/BlogPage/Blog";
import SingleBlog from "../components/BlogPage/SingleBlog";
import ContactPage from "../components/ContactPage";
import HomePage from "../components/HomePage";
import ProductDetails from "../components/ProductPage/ProductDetails";
import ProductList from "../components/ProductPage/ProductList";
import DefaultLayout from "./DefaultLayout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/productList",
        element: <ProductList/>
      },
      {
        path: '/productDetails',
        element: <ProductDetails/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/singleBlog',
        element: <SingleBlog/>
      }
    ],
  },
]);
export default router;
