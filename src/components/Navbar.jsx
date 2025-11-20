import {Link, NavLink} from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const {user} = useAuth();
    const links = (
        <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/browseCars"}>Browse Cars</NavLink>

            {user && (
                <>
                    <NavLink to={"/addCar"}>Add Card</NavLink>
                    <NavLink to={"/myBookings"}>My Booking</NavLink>
                    <NavLink to={"/myListings"}>My Listing</NavLink>
                </>
            )}
        </>
    );
    return (
        <div className="md:w-11/12 mx-auto">
            <div>
                <div className="md:navbar md:bg-base-100 max-sm:mt-2 md:rounded-b-2xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                {links}
                            </ul>
                        </div>
                        <Link to={"/"} className="btn text-xl bg-gradient-brand text-white rounded">
                            Rent Your Wheels
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-10  ">{links}</ul>
                    </div>
                    <div className="navbar-end md:px-8 font-bold relative">
                        {user ? (
                            <div className="dropdown dropdown-end ">
                                <div tabIndex={0} role="button">
                                    <div className="w-10 h-10 rounded-full border-2 border-[#13c7e8] overflow-hidden cursor-pointer max-sm:absolute max-sm:-top-5 max-sm:right-3">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </div>
                                <ul
                                    // tabIndex="-1"
                                    className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
                                >
                                    <li className="text-[#13c7e8] hover:border-b-2 transition-all duration-200 rounded">
                                        <a>{user?.displayName}</a>
                                    </li>
                                    <li className="text-[#13c7e8] hover:border-b-2 rounded">
                                        <a>{user?.email}</a>
                                    </li>
                                    <li className="text-[#13c7e8] hover:border-b-2 rounded">
                                        <Link to={"/login"}>Log Out</Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link
                                className="md:border-2 border-[#12d8fa] px-8 py-2 rounded hover:bg-[#12d8fa] transition-all duration-300  hover:text-white ease-in-out"
                                to={"/login"}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
