import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import paginationicon from "../../assets/pagination/vector.png";
import paginationactive from "../../assets/pagination/vector1.png";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      testimonial: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      designation: "Marketing Agency",
    },
    {
      testimonial: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      designation: "Marketing Agency",
    },
    {
      testimonial: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      designation: "Marketing Agency",
    },
    {
      testimonial: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      designation: "Marketing Agency",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  function settingNextSlide(slideIndex) {
    setActiveSlide(slideIndex);
  }
  return (
    <div className="testimonials">
      <div className="team__heading">
        <h2 className="services__h2">Testimonial</h2>
        <p className="services__p">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="testimonial">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={100}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          onSlideChange={(swiper) => settingNextSlide(swiper.realIndex)}
          loop={true}
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide>
                <div className="testimonial__slide">
                  <p>{testimonial.testimonial}</p>
                </div>
                <div className="testimonial__slide__content">
                  <h3 className="testimonial__slide__content--h3">
                    {testimonial.name}
                  </h3>
                  <p className="testimonial__slide__content--p">
                    {testimonial.designation}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="custom-controls">
            <div className="pagination">
              <button className="prev">←</button>
              <div className="custom__pagination">
                {testimonials.map((_, i) => (
                  <img
                    src={i === activeSlide ? paginationactive : paginationicon}
                    alt="pagination"
                    className="bullet"
                  />
                ))}
              </div>
              <button className="next">→</button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
