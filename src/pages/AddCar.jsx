import React from "react";
import addCarBg from "../assets/addCarBg.jpg";

const AddCar = () => {
    const handleAddCar = (e) => {
        e.preventDefault();
        const carName = e.target.carName.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const rentPrice = e.target.rentPrice.value;
        const location = e.target.location.value;
        const imageURL = e.target.imageURL.value;
        const providerName = e.target.providerName.value;
        const providerEmail = e.target.providerEmail.value;
        const status = "available";
        console.log(carName, description, category, rentPrice, location, imageURL, providerName, providerEmail, status);
    };
    return (
        <div className="">
            <h1 className="text-center text-4xl my-10 font-semibold">
                Hi <span className="font-bold text-blue-700">{"User Name"}</span>, <br />
                If you want to add your car, don't delay and fill-up the below simple form
            </h1>

            {/* add car form  */}
            <div className="hero min-h-screen">
                <div className="card bg-base-100 w-full lg:max-w-[700px] md:max-w[500px] max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleAddCar}>
                            <fieldset className="fieldset space-y-2 font-semibold">
                                {/* Car Name */}
                                <label className="label text-xl">Car Name</label>
                                <input type="text" className="input w-full" placeholder="Car Name" name="carName" />

                                {/* description */}
                                <label className="label text-xl">Description</label>
                                <textarea
                                    placeholder="Provide a short description of your car."
                                    className="textarea textarea-md w-full"
                                    name="description"
                                ></textarea>

                                {/*category */}
                                <label className="label text-xl">Select Your Category</label>
                                <select
                                    defaultValue="Category"
                                    className="select select-neutral w-full"
                                    name="category"
                                >
                                    <option disabled={true}>Select your category</option>
                                    <option value={"sedan"}>Sedan</option>
                                    <option value={"suv"}>SUV</option>
                                    <option value={"hatchback"}>Hatchback</option>
                                    <option value={"luxury"}>Luxury</option>
                                    <option value={"electric"}>Electric</option>
                                </select>

                                {/* rent price */}
                                <label className="label text-xl">Rent Price (Per Day)</label>
                                <input type="text" className="input w-full" placeholder="Rent Price" name="rentPrice" />

                                {/*location */}
                                <label className="label text-xl">Location</label>
                                <input type="text" className="input w-full" placeholder="Location" name="location" />

                                {/*car image */}
                                <label className="label text-xl">Car Image URL</label>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Car Image URL"
                                    name="imageURL"
                                />

                                {/*car image */}
                                <label className="label text-xl">Provider Name</label>
                                <input
                                    type="text"
                                    className="input w-full"
                                    placeholder="Provider Name"
                                    name="providerName"
                                />

                                {/*car image */}
                                <label className="label text-xl">Provider Email</label>
                                <input
                                    type="email"
                                    className="input w-full"
                                    placeholder="Provider Email"
                                    name="providerEmail"
                                />

                                <button className="btn btn-neutral mt-4">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;
