import React, {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBooking = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure(); // FIXED SPELLING
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (!user?.email) {
            console.log("No user email yet");
            return;
        }

        console.log("Fetching bookings for:", user.email);

        axiosSecure
        .get(`/bookings?email=${user.email}`)
        .then((res) => {
            console.log("Response:", res.data);
            setBookings(res.data); // FIXED
        })
        .catch((err) => console.log("Error:", err));
    }, [axiosSecure, user?.email]);

    return (
        <div className="w-11/12 mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-[#12d8fa]">My Bookings</h2>

            {bookings.length === 0 ? (
                <p className="text-gray-600">You have no bookings yet.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bookings.map((b) => (
                        <div key={b._id} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition border">
                            <img src={b.image} className="w-full h-40 object-cover rounded-md" />

                            <h3 className="text-xl font-bold mt-3">{b.carName}</h3>
                            <p className="text-gray-600 mt-1">{b.description.slice(0, 60)}...</p>

                            <p className="text-gray-700 mt-2 font-semibold">
                                Price:
                                <span className="text-[#12d8fa] font-bold"> ${b.price}/day</span>
                            </p>

                            <p className="text-gray-600 text-sm">Booking Date: {b.date}</p>

                            <span className="px-4 py-1 inline-block mt-3 rounded text-white bg-[#12d8fa]">
                                {b.status || "Booked"}
                            </span>

                            <button
                                //Todo onClick={() => handleDelete(b._id)}
                                className="mt-4 w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition"
                            >
                                Cancel Booking
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default MyBooking;
