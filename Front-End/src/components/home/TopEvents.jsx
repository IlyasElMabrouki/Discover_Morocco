import React from "react";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function TopEvents() {
  const topEvents = [
    {
      companyName: "Company 1",
      eventName: "Event 1",
      price: 100,
      rate: 3,
    },
    {
      companyName: "Company 2",
      eventName: "Event 2",
      price: 200,
      rate: 4,
    },
    {
      companyName: "Company 3",
      eventName: "Event 3",
      price: 300,
      rate: 5,
    },
    {
      companyName: "Company 4",
      eventName: "Event 4",
      price: 400,
      rate: 4,
    },
  ];
  const swiperElRef = React.useRef(null);
  React.useEffect(() => {
    const handleResize = () => {
      if (swiperElRef.current) {
        const swiper = swiperElRef.current.swiper;
        const newSlidesPerView =
          window.innerWidth < 1280 && window.innerWidth > 768
            ? 2
            : window.innerWidth < 768
            ? 1
            : 3;
        swiper.params.slidesPerView = newSlidesPerView;
        const newSpaceBetween =
          window.innerWidth < 1280 && window.innerWidth > 768
            ? 100
            : window.innerWidth < 768
            ? 0
            : 50;
        swiper.params.spaceBetween = newSpaceBetween;
        swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="w-fit mx-auto mt-20 flex flex-col items-center">
        <h6 className="font-bold text-lg text-blue-600">Top events</h6>
        <h1 className="font-extrabold  text-3xl mb-5 sm:text-4xl mx:text-6xl">
          Explore Top <span>Morrocan</span>{" "}events
        </h1>
      </div>
      <div className="ml-3">
      <Swiper
        ref={swiperElRef}
        className="w-full mx-auto mt-10"
        modules={[Autoplay]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={3}
      >
        {topEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <Card
              componyName={event.companyName}
              eventName={event.eventName}
              price={event.price}
              rate={event.rate}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default TopEvents;
