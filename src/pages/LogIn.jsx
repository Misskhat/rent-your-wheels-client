import React from "react";
import {Link, useLocation, useNavigate} from "react-router";
import useAuth from "../hooks/useAuth";
import {toast, ToastContainer} from "react-toastify";

const LogIn = () => {
    const {signInUser} = useAuth();

    const navigate = useNavigate(); //TODO: after signin i'm use
    const location = useLocation(); //TODO: after signin i'm use

    // console.log(navigate());
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
        .then((res) => {
            console.log(res);
            toast.success("Successfully Login");
        })
        .catch((error) => console.log(error));
    };

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="w-full max-w-md p-8 shadow-lg rounded-2xl bg-white">
                    <h2 className="text-3xl font-bold text-center mb-6 text-[#12d8fa]">Login</h2>

                    <form onSubmit={handleLogIn} className="space-y-4">
                        <div>
                            <label className="font-semibold">Email</label>
                            <input type="email" name="email" className="w-full p-3 border rounded-lg" required />
                        </div>

                        <div>
                            <label className="font-semibold">Password</label>
                            <input type="password" name="password" className="w-full p-3 border rounded-lg" required />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#12d8fa] text-white p-3 rounded-lg font-semibold hover:bg-[#0bc2e1] transition-all duration-300"
                        >
                            Login
                        </button>
                        <ToastContainer />
                    </form>

                    <div className="divider">OR</div>

                    <button
                        // onClick={signInWithGoogle}
                        className="w-full p-3 border rounded-lg hover:bg-gray-200 transition"
                    >
                        Continue with Google
                    </button>

                    <p className="mt-4 text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-[#12d8fa] underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
