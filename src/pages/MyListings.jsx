import React, {useEffect, useRef, useState} from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {toast, ToastContainer} from "react-toastify";
import Swal from "sweetalert2";

const MyListings = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const carEditRef = useRef(null);
    const [cars, setCars] = useState([]);
    const [editingCar, setEditingCar] = useState(null);

    useEffect(() => {
        if (!user?.email) {
            return;
        }
        axiosSecure
        .get(`/myListings?email=${user.email}`)
        .then((data) => setCars(data.data))
        // .catch((error) => console.log(error));
    }, [axiosSecure, user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/myListings/${id}`).then(() => {
                    const afterDeleteCars = cars.filter((car) => car._id !== id);
                    setCars(afterDeleteCars);
                });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const handleEdit = (car) => {
        setEditingCar(car);
        carEditRef.current.showModal();
    };

    const handleUpdateCar = (e) => {
        e.preventDefault();

        const form = e.target;
        const carName = form.carName.value;
        const image = form.image.value;
        const type = form.type.value;
        const location = form.location.value;
        const price = form.price.value;
        const availability = form.availability.value;
        const description = form.description.value;

        const updateNewCar = {
            carName,
            image,
            type,
            location,
            price,
            availability,
            description,
            email: user.email,
        };

        axiosSecure.patch(`/myListings/${editingCar._id}`, updateNewCar).then(() => {
            toast.success("Successfully update your listing car");
            const updatedList = cars.map((car) => (car._id === editingCar._id ? {...car, ...updateNewCar} : car));
            setCars(updatedList);
            carEditRef.current.close();
        });
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
                            <img src={car.image} className="w-full object-cover rounded-md" />

                            <h3 className="text-xl font-bold mt-3">{car.carName}</h3>
                            <p className="text-gray-600">{car.description?.slice(0, 60)}...</p>

                            <p className="font-semibold text-gray-700 mt-2">
                                Price: <span className="text-[#12d8fa]">${car.price}/day</span>
                            </p>

                            <p className="text-sm text-gray-500">Type: {car.type}</p>

                            <div className="flex justify-between mt-4">
                                <div>
                                    <button
                                        onClick={() => handleEdit(car)}
                                        className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                                    >
                                        Edit
                                    </button>
                                    <dialog ref={carEditRef} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h2 className="text-2xl font-bold mb-4">Edit Car</h2>

                                            <form
                                                onSubmit={handleUpdateCar}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                            >
                                                {/* Car Name */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold mb-1">Car Name</label>
                                                    <input
                                                        type="text"
                                                        name="carName"
                                                        defaultValue={editingCar?.carName}
                                                        className="p-3 border rounded-xl"
                                                        required
                                                    />
                                                </div>

                                                {/* Image */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold mb-1">Image URL</label>
                                                    <input
                                                        type="url"
                                                        name="image"
                                                        defaultValue={editingCar?.image}
                                                        className="p-3 border rounded-xl"
                                                        required
                                                    />
                                                </div>

                                                {/* Type */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold mb-1">Type</label>
                                                    <select
                                                        name="type"
                                                        defaultValue={editingCar?.type}
                                                        className="p-3 border rounded-xl"
                                                    >
                                                        <option>Sedan</option>
                                                        <option>SUV</option>
                                                        <option>Luxury</option>
                                                        <option>Electric</option>
                                                        <option>Hybrid</option>
                                                        <option>Coupe</option>
                                                        <option>Hatchback</option>
                                                        <option>Van</option>
                                                    </select>
                                                </div>

                                                {/* Location */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold mb-1">Location</label>
                                                    <input
                                                        type="text"
                                                        name="location"
                                                        defaultValue={editingCar?.location}
                                                        className="p-3 border rounded-xl"
                                                        required
                                                    />
                                                </div>

                                                {/* Price */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold mb-1">Price</label>
                                                    <input
                                                        type="number"
                                                        name="price"
                                                        defaultValue={editingCar?.price}
                                                        className="p-3 border rounded-xl"
                                                        required
                                                    />
                                                </div>

                                                {/* Availability */}
                                                <div className="flex flex-col">
                                                    <label className="font-semibold mb-1">Availability</label>
                                                    <select
                                                        name="availability"
                                                        defaultValue={editingCar?.availability}
                                                        className="p-3 border rounded-xl"
                                                    >
                                                        <option>Available</option>
                                                        <option>Unavailable</option>
                                                    </select>
                                                </div>

                                                {/* Description */}
                                                <div className="flex flex-col md:col-span-2">
                                                    <label className="font-semibold mb-1">Description</label>
                                                    <textarea
                                                        name="description"
                                                        rows="4"
                                                        defaultValue={editingCar?.description}
                                                        className="p-3 border rounded-xl"
                                                    ></textarea>
                                                </div>

                                                {/* Submit */}
                                                <div className="modal-action col-span-2">
                                                    <button
                                                        type="submit"
                                                        className="btn bg-[#12d8fa] text-white w-full"
                                                    >
                                                        Update & Close
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
                                </div>

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
