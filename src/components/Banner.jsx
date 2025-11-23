import {useEffect, useState} from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Banner = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState("");
    const [filteredCars, setFilteredCars] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axiosSecure.get("/cars").then((data) => setCars(data.data));
    }, [axiosSecure]);

    useEffect(() => {
        const searchTextFormate = search.trim().toLowerCase();
        if (searchTextFormate === "") {
            return setFilteredCars([]);
        }
        const filteredCars = cars.filter((cars) => cars.carName.includes(searchTextFormate));
        setFilteredCars(filteredCars);
    }, [cars, search]);

    return (
        <>
            {/* Banner Section */}
            <div
                className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between 
                bg-[#e8faff] px-6 md:px-20 py-16 rounded-2xl shadow-md"
            >
                <div className="w-full md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Find Your Perfect Ride
                        <span className="text-[#12d8fa]"> Anytime, Anywhere</span>
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Rent from a wide range of high-quality vehicles at affordable prices. Simple booking. Fast
                        service. Reliable experience.
                    </p>

                    {/* Search Input */}
                    <div className="flex items-center bg-white p-3 rounded-xl shadow-md border border-gray-200">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search your desire car..."
                            className="w-full outline-none px-2"
                        />
                        {/* <button
                            className="bg-[#12d8fa] text-white px-5 py-2 rounded-lg 
                            hover:bg-[#0bc2e1] transition-all duration-300"
                        >
                            Search
                        </button> */}
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img
                        src="https://i.ibb.co.com/4Rp3hJTQ/Honda-Civic.png"
                        alt="Banner Car"
                        className="w-[350px] md:w-[450px] rounded-2xl drop-shadow-xl 
                        hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {filteredCars.length > 0 && <h2 className="text-4xl font-bold text-center mt-10">Your Search Result</h2>}
            {/* Search Results UI */}
            {filteredCars.length > 0 && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredCars.map((car) => (
                        <div key={car._id} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <img src={car.image} alt={car.carName} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-xl font-bold mt-4">{car.carName}</h3>
                            <p className="text-gray-600">{car.brand}</p>
                            <p className="text-[#12d8fa] font-bold mt-2">${car.price}/day</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Banner;
