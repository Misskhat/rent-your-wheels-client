import React from "react";

const AddCar = () => {
    const handleAddCar = (e) => {
        e.preventDefault();

        const form = e.target;
        const carName = form.carName.value;
        const image = form.image.value;
        const type = form.type.value;
        const location = form.location.value;
        const price = form.price.value;
        const availability = form.availability.value;
        const description = form.description.value;

        console.log({
            carName,
            image,
            type,
            location,
            price,
            availability,
            description,
        });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10 px-4">
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-[#12d8fa]">Add a New Car</h2>

                <form onSubmit={handleAddCar} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Car Name */}
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Car Name</label>
                        <input
                            type="text"
                            name="carName"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            placeholder="Toyota Corolla"
                            required
                        />
                    </div>

                    {/* Car Image */}
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Car Image URL</label>
                        <input
                            type="url"
                            name="image"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            placeholder="https://example.com/car.jpg"
                            required
                        />
                    </div>

                    {/* Type */}
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Category / Type</label>
                        <select
                            name="type"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            required
                        >
                            <option value="">Select a type</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            placeholder="Dhaka, Bangladesh"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Rent Price (Per Day)</label>
                        <input
                            type="number"
                            name="price"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            placeholder="2500"
                            required
                        />
                    </div>

                    {/* Availability */}
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1">Availability</label>
                        <select
                            name="availability"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            required
                        >
                            <option value="">Select availability</option>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="font-semibold mb-1">Car Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12d8fa]"
                            placeholder="Write detailed information about the car..."
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#12d8fa] text-white p-3 rounded-xl font-semibold 
                            hover:bg-[#0bc2e1] transition-all duration-300 shadow-md"
                        >
                            Add Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
