import React, {useEffect, useState} from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import CarCard from "../components/CarCard";

const BrowseCars = () => {
    const axiosSecure = useAxiosSecure();
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axiosSecure.get("/cars").then((data) => setCars(data.data));
    }, [axiosSecure]);
    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
                {cars.map((car) => (
                    <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default BrowseCars;
