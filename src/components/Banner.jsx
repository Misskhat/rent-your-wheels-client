const Banner = () => {
    return (
        <div
            className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between 
        bg-[#e8faff] px-6 md:px-20 py-16 rounded-2xl shadow-md"
        >
            {/* Left Text Section */}
            <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    Find Your Perfect Ride
                    <span className="text-[#12d8fa]"> Anytime, Anywhere</span>
                </h1>

                <p className="text-gray-600 text-lg">
                    Rent from a wide range of high-quality vehicles at affordable prices. Simple booking. Fast service.
                    Reliable experience.
                </p>

                {/* Search Input */}
                <div className="flex items-center bg-white p-3 rounded-xl shadow-md border border-gray-200">
                    <input type="text" placeholder="Search your desire car..." className="w-full outline-none px-2" />
                    <button
                        className="bg-[#12d8fa] text-white px-5 py-2 rounded-lg 
                    hover:bg-[#0bc2e1] transition-all duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                <img
                    src="https://i.ibb.co.com/4Rp3hJTQ/Honda-Civic.png"
                    alt="Banner Car"
                    className="w-[350px] md:w-[450px] rounded-2xl drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

export default Banner;
