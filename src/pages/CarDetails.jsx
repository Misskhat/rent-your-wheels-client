import React, {useEffect, useState} from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {useParams} from "react-router";
import {toast, ToastContainer} from "react-toastify";

const CarDetails = () => {
    const {id} = useParams();
    const [car, setCar] = useState({});
    const [isBooked, setIsBooked] = useState(false);
    const [available, setAvailable] = useState(true);
    const axiousSecure = useAxiosSecure();

    useEffect(() => {
        axiousSecure.get(`/cars/${id}`).then((data) => setCar(data.data));
    }, [id, axiousSecure]);

    const handleBooking = () => {
        const carInfo = {
            carName: car?.carName,
            description: car?.description,
            image: car?.image,
            location: car?.location,
            price: car?.price,
            type: car?.type,
        };

        axiousSecure.post("/bookings", carInfo).then(() => {
            toast.success("Thank you, for successfully booking your car");
            setIsBooked(!isBooked);
            setAvailable(!available);
        });
    };
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
            <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
                {/* Car Image */}
                <div className="w-full h-72 md:h-96 overflow-hidden">
                    <img src={car.image} alt={car.carName} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-gray-800">{car.carName}</h1>

                        <span className="text-2xl font-semibold text-[#12d8fa]">৳{car.price}/day</span>
                    </div>

                    {/* Type & Availability */}
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-1 bg-[#12d8fa]/10 text-[#12d8fa] rounded-full font-medium">
                            {car.type}
                        </span>

                        <span
                            className={`px-4 py-1 rounded-full font-medium ${
                                available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                            }`}
                        >
                            {available ? "Available" : "Unavailable"}
                            {/* {car.availability} */}
                        </span>
                    </div>

                    {/* Location */}
                    <p className="text-gray-600 font-medium">📍 {car.location}</p>

                    {/* Description */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{car.description}</p>
                    </div>

                    {/* Button */}
                    <div>
                        <button
                            onClick={handleBooking}
                            className={
                                isBooked
                                    ? ` w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 bg-gray-400 cursor-not-allowed`
                                    : `w-full py-3 rounded-xl text-white font-semibold transition-all duration-300
                                ${car.availability === "Available" && "bg-[#12d8fa] hover:bg-[#0bc2e1]"}
                            `
                            }
                        >
                            {isBooked ? "Unavailable" : "Book Now"}
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
