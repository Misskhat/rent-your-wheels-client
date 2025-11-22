import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import {Navigate, replace, useLocation} from "react-router";

const PrivateRouter = ({children}) => {
    const location = useLocation();
    const {user, loader} = useAuth();
    if (loader) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRouter;
