import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import BrowseCars from "../pages/BrowseCars";
import CarDetails from "../pages/CarDetails";
import AddCar from "../pages/AddCar";
import MyListings from "../pages/MyListings";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        ErrorBoundary: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <ErrorPage></ErrorPage>,
        Component: MainLayout,

        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/browseCars",
                element: <BrowseCars></BrowseCars>,
            },
            {
                path: "/carDetails",
                element: <CarDetails></CarDetails>,
            },
            {
                path: "/addCar",
                element: <AddCar></AddCar>,
            },
            {
                path: "/myListings",
                element: <MyListings></MyListings>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);
