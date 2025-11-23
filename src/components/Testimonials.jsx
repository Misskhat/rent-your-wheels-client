import {Star} from "lucide-react";

const reviews = [
    {
        name: "Arif Hossain",
        img: "https://i.ibb.co.com/3f8wtPZ/author-img5.png",
        rating: 5,
        review: "Rent Your Wheels made my trip smooth and stress-free. The car was clean and comfortable. Highly recommended!",
    },
    {
        name: "Sarah Mitaly",
        img: "https://i.ibb.co.com/HCM0TJx/author-img3.png",
        rating: 4,
        review: "Booking was quick, and customer service was amazing. Loved the professional behavior and fast support.",
    },
    {
        name: "Jonathan Lee",
        img: "https://i.ibb.co.com/x1WFrCn/cover-photo5.png",
        rating: 5,
        review: "Fantastic experience! Prices are reasonable, and the variety of cars is great. Will book again soon.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-[#f5fcff]">
            <div className="w-11/12 mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                    What Our <span className="text-[#12d8fa]">Customers Say</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                    We value our customers and strive to provide the best car rental experience. Here's what they say
                    about us.
                </p>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition 
                            duration-300 border hover:border-[#12d8fa] hover:-translate-y-2"
                        >
                            {/* User Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="w-20 h-20 rounded-full border-4 border-[#12d8fa]"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>

                            {/* Rating */}
                            <div className="flex justify-center mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-600 italic">"{review.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
