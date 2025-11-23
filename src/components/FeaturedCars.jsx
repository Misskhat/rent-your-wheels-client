import React, {useEffect, useState} from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import CarCard from "./CarCard";

const FeaturedCars = () => {
    const [cars, setCars] = useState([]);
    const axiousSecure = useAxiosSecure();

    useEffect(() => {
        axiousSecure.get("/featured-cars").then((data) => setCars(data.data));
    }, [axiousSecure]);

    return (
        <div className="w-11/12 mx-auto my-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
                {cars.map((car) => (
                    <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCars;
