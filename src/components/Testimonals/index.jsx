import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
  return (
    <div className="testimonial">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={200}
        slidesPerView={3}
        centeredSlides={true} 
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onLoop={true}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide>      
              <div className="testimonial__slide">
                <p>
                  {testimonial.testimonial}
                </p>
              </div>
              <div className="testimonial__slide__content">
                <h3 className="testimonial__slide__content--h3">{testimonial.name}</h3>
                <p className="testimonial__slide__content--p">
                  {
                    testimonial.designation
                  }
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
