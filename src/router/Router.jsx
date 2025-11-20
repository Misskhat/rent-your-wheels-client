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
import PrivateRouter from "../pages/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        // hydrateFallbackElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
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
                path: "/carDetails/:id",
                element: <CarDetails></CarDetails>,
            },
            {
                path: "/addCar",
                element: (
                    <PrivateRouter>
                        <AddCar></AddCar>
                    </PrivateRouter>
                ),
            },
            {
                path: "/myListings",
                element: <MyListings></MyListings>,
            },
            {
                path: "/myBookings",
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
