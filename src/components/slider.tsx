import prevIcon from "../assets/icons/slider-prev-icon.svg";
import nextIcon from "../assets/icons/slider-next-icon.svg";
import "../index.css";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ReactNode, useRef } from "react";
import { NavigationOptions } from "swiper/types";

const Slider = ({ children }: { children: ReactNode }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  //   const [index, setIndex] = useState(0);
  //   const bulletClass = "slider-bullet";
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      autoplay={{ delay: 2000 }}
      spaceBetween={5}
      slidesPerView={1}
      onInit={(swiper) => {
        // Pass the references to Swiper's navigation settings
        if (swiper.params.navigation) {
          (swiper.params.navigation as NavigationOptions).prevEl =
            prevRef.current;
          (swiper.params.navigation as NavigationOptions).nextEl =
            nextRef.current;
        }

        swiper?.navigation?.init();
        swiper?.navigation?.update();
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      pagination={{
        clickable: true,
      }}
      onSwiper={(swiper) => console.log(swiper.activeIndex)}
      onSlideChange={() => console.log("slide change")}
    >
      <div className="flex absolute w-[359px] lg:w-[480px] translate-x-[1%] z-10 top-[50%] justify-between">
        <span
          className="bg-white w-[24px] h-[24px] rounded-full flex items-center justify-center "
          ref={prevRef}
        >
          <img src={prevIcon} alt="" />
        </span>
        <span
          className="bg-white w-[24px] h-[24px] rounded-full flex items-center justify-center"
          ref={nextRef}
        >
          <img src={nextIcon} alt="" />
        </span>
      </div>
      {children}
    </Swiper>
  );
};

export default Slider;
