import HomePage from "../components/HomePage";
import DefaultLayout from "./DefaultLayout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/home',
                element: <HomePage/>
            }
        ]
    }
])
export default router;