import {Link, useNavigate} from "react-router";
import useAuth from "../hooks/useAuth";
import {auth} from "../firebase/firebase.config";
import {toast, ToastContainer} from "react-toastify";

const Register = () => {
    const {signUpUser, setUser} = useAuth();

    const navigate = useNavigate(); //TODO: after signup use it

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        console.log(name, email, photoURL, password);

        signUpUser(email, password)
        .then((res) => {
            const user = res.user;
            toast.success("Your are successfully register");
        })
        .catch((error) => console.log(error.message));

        // TODO: validate password
        // TODO: create user
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md p-8 shadow-lg rounded-2xl bg-white">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#12d8fa]">Create an Account</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="font-semibold">Name</label>
                        <input type="text" name="name" className="w-full p-3 border rounded-lg" required />
                    </div>

                    <div>
                        <label className="font-semibold">Photo URL</label>
                        <input type="url" name="photoURL" className="w-full p-3 border rounded-lg" required />
                    </div>

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
                        Register
                    </button>
                </form>

                <div className="divider">OR</div>

                <button
                    // onClick={signInWithGoogle}
                    className="w-full p-3 border rounded-lg hover:bg-gray-200 transition"
                >
                    Sign Up with Google
                </button>
                <ToastContainer />
                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-[#12d8fa] underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
