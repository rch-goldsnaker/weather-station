import { Card } from "./Card";
import {
  CloudRain,
  Gauge,
  Moon,
  Temperature,
  Wind,
} from "./icons";
import { Droplet } from "./icons/Droplet";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-4">
        <div className="flex flex-col">
          <div className="flex gap-3">
            <h3 className="text-2xl">Wind</h3>
            <div className="w-[30px] h-[30px] rounded-full bg-[#0e1426] p-1">
              <Wind/>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-xl text-[#5f6281]">Direction:</p>
            <p className="text-xl text-white">SW</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl text-[#5f6281]">Speed:</p>
            <p className="text-xl text-white">13.0 m/s</p>
          </div>
          <div className="flex gap-2">
            <p className="text-xl text-[#5f6281]">Average:</p>
            <p className="text-xl text-white">11.8</p>
          </div>
        </div>
        <div className="flex items-end">
          <p className="text-xl text-[#5f6281]">Moon Phase</p>
          <Moon />
        </div>
      </div>
      {/* <div className="flex m-4 gap-3">
        <Card
          title="Temperature"
          icon={<Temperature />}
          value={30}
          unit={"C"}
          texts={["interior", "text2", "text3"]}
        />
        <Card
          title="Humidity"
          icon={<Droplet />}
          value={30}
          unit={"mm"}
          texts={["text1", "text2", "text3"]}
        />
        <Card
          title="Pressure"
          icon={<Gauge />}
          value={30}
          unit={"Pa"}
          texts={["text1", "text2", "text3"]}
        />
        <Card
          title="Rainfall"
          icon={<CloudRain />}
          value={30}
          unit={"mm"}
          texts={["text1", "text2", "text3"]}
        />
      </div> */}
      <div className="flex m-4 gap-3 min-h-60">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,Parallax]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <Card
              title="Temperature IN"
              icon={<Temperature />}
              value={78.9}
              unit={"°F"}
              texts={["", "Indoor Temperature", ""]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Humidity IN"
              icon={<Droplet />}
              value={55}
              unit={"%"}
              texts={["", "Indoor Humidity", ""]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Pressure"
              icon={<Gauge />}
              value={1008.9}
              unit={"hPa"}
              texts={["", "Absolute Pressure", ""]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Rainfall"
              icon={<CloudRain />}
              value={127.4}
              unit={"mm"}
              texts={["", "Total", ""]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Temperature OUT"
              icon={<Temperature />}
              value={89.0}
              unit={"°F"}
              texts={["", "Outdoor Temperature", ""]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Humidity OUT"
              icon={<Droplet />}
              value={58}
              unit={"%"}
              texts={["", "Outdoor Humidity", ""]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
