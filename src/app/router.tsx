import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Search from "../pages/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Search />
    }
])