import Banner from "../components/Banner";
import FeaturedCars from "../components/FeaturedCars";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto mt-2 mb-10">
            <Banner></Banner>
            <h2 className="my-10 text-4xl text-center font-bold">Our Featured Cars </h2>
            <FeaturedCars></FeaturedCars>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;
