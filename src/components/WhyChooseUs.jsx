import {Shield, Clock, Car, ThumbsUp} from "lucide-react";

const features = [
    {
        icon: <Car size={40} className="text-[#12d8fa]" />,
        title: "Wide Selection of Cars",
        desc: "Choose from economy, luxury, SUV, or premium models to suit your needs.",
    },
    {
        icon: <Clock size={40} className="text-[#12d8fa]" />,
        title: "Easy & Fast Booking",
        desc: "Book your desired car in seconds with our smooth and simple process.",
    },
    {
        icon: <Shield size={40} className="text-[#12d8fa]" />,
        title: "Secure & Trusted",
        desc: "Your data and booking are protected with advanced security systems.",
    },
    {
        icon: <ThumbsUp size={40} className="text-[#12d8fa]" />,
        title: "Affordable Pricing",
        desc: "Get the best deals with transparent and competitive rental prices.",
    },
];

const WhyChooseUs = () => {
    return (
        <div className="py-20 bg-white">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                    Why <span className="text-[#12d8fa]">Choose Us?</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                    We provide the best car rental experience with top-notch service, reliability, and comfort at
                    unbeatable prices.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 bg-[#f5fcff] rounded-2xl shadow-md hover:shadow-lg transition 
                            hover:-translate-y-2 duration-300 border border-transparent hover:border-[#12d8fa]"
                        >
                            <div className="mb-4 flex justify-center">{item?.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item?.title}</h3>
                            <p className="text-gray-600">{item?.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
