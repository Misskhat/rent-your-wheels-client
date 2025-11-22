const CarCard = ({car}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Car Image */}
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={car.image}
                    alt={car.carName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{car?.carName}</h3>

                <p className="text-sm text-gray-500">📍 {car?.location}</p>

                <div className="flex justify-between items-center">
                    <span className="px-3 py-1 text-sm bg-[#12d8fa]/10 text-[#12d8fa] rounded-full">{car?.type}</span>

                    <span className="font-bold text-lg text-gray-800">৳{car?.price}/day</span>
                </div>

                {/* Availability */}
                <p
                    className={`text-sm font-semibold ${
                        car?.availability === "Available" ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {car?.availability}
                </p>

                {/* Button */}
                <button
                    className="w-full mt-2 bg-[#12d8fa] text-white py-2 rounded-xl font-semibold 
                    hover:bg-[#0bc2e1] transition-all duration-300"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default CarCard;
