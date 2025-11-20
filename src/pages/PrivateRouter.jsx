import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import {Navigate, useLocation} from "react-router";

const PrivateRouter = ({children}) => {
    const {user, loader} = useAuth();
    const location = useLocation();
    if (loader) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    } else {
        return <Navigate to={"/login"} state={location}></Navigate>;
    }
};

export default PrivateRouter;
