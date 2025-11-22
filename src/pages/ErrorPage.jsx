import {Link} from "react-router";
import errorpage from "../assets/404image.jpeg";

const ErrorPage = () => {
    return (
        <div className="w-11/12 mx-auto min-h-screen">
            <div className="flex items-center justify-center min-h-screen">
                <div>
                    <img className="rounded-4xl mx-auto max-sm:w-56 md:w-[800px]" src={errorpage} alt="" />
                    <Link to={"/"} className="flex items-center justify-center mt-5">
                        <button className="w-52 bg-[#12d8fa] text-white p-3 rounded-lg font-semibold hover:bg-[#0bc2e1] transition-all duration-300">
                            BACK TO HOME
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
