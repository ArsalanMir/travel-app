import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    review: "Amazing experience! Everything was well planned, and we had a great time.",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    review: "Best travel agency! They made our trip smooth and hassle-free.",
    rating: 4,
  },
  {
    name: "Michael Lee",
    review: "Highly recommended! Will definitely book again.",
    rating: 5,
  },
];

// Custom Arrows
const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-md bg-white text-gray-700 transition hover:bg-accent ${
      direction === "left" ? "left-4" : "right-4"
    }`}
  >
    {direction === "left" ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
  </button>
);

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-8">What Our Clients Say</h2>

        <div className="relative max-w-2xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-800 rounded-2xl shadow-lg transition duration-300">
                <p className="text-lg italic">"{testimonial.review}"</p>
                <p className="mt-4 font-semibold text-accent">- {testimonial.name}</p>
                <div className="mt-2 text-yellow-500 text-lg">
                  {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
