import React, {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyListings = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        if (!user?.email) {
            return;
        }
        axiosSecure
        .get(`/myListings?email=${user.email}`)
        .then((data) => setCars(data.data))
        .catch((error) => console.log(error));
    }, [axiosSecure, user]);

    const handleDelete = (id) => {
        console.log("clicked", id);
    };
    return (
        <div className="w-11/12 mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-[#12d8fa]">My Listings</h2>

            {cars.length === 0 ? (
                <p className="text-gray-600">You haven’t added any cars yet.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car) => (
                        <div key={car._id} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <img src={car.image} className="w-full h-40 object-cover rounded-md" />

                            <h3 className="text-xl font-bold mt-3">{car.carName}</h3>
                            <p className="text-gray-600">{car.description?.slice(0, 60)}...</p>

                            <p className="font-semibold text-gray-700 mt-2">
                                Price: <span className="text-[#12d8fa]">${car.price}/day</span>
                            </p>

                            <p className="text-sm text-gray-500">Type: {car.type}</p>

                            <div className="flex justify-between mt-4">
                                <button className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white">
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(car._id)}
                                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyListings;
