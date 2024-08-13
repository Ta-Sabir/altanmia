import "./Hero.css";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import {
  image1,
  image2,
  image3,
  image4,
  nafs1,
  nafs2,
  nafs3,
  pakage1,
  pakage2,
  pakage3,
  dif1,
  dif2,
  dif3,
  dif4,
  dif5,
  dif8,
  dif9,
  dif10,
  dif11,
  dif12,
} from "../../assets/index";

const Hero = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const enlargeImage = (imgSrc) => {
    setEnlargedImage(imgSrc);
  };

  const closeModal = () => {
    setEnlargedImage(null);
  };
  return (
    // START HERO COMPONENT
    <div className="hero pt-[70px] pb-[90px] flex items-center justify-center">
      <div className="container text-center">
        <div>
          <h2 className="text-[#5262ad] text-[24px] font-bold">
            نقدم اقوى العروض على الدبلومات والدورات التدريبية
          </h2>
          <span className="text-[#636499] text-[18px] block mt-2">
            الدبلومات التدريبية · الدورات التأهيلية · الدورات التطويرية
          </span>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row items-center gap-2">
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={image1}
                  alt="image1"
                  className="h-[100%] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={image2}
                  alt="image2"
                  className="h-[100%] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={nafs1}
                  alt="nafs1"
                  className="h-[100%] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={nafs3}
                  alt="nafs3"
                  className="h-[100%] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={pakage1}
                  alt="pakage1"
                  className="h-[100%] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={pakage2}
                  alt="pakage2"
                  className="h-[100%] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dif1} alt="dif1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dif2} alt="dif2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dif3} alt="dif3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dif10} alt="dif10" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dif11} alt="dif11" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={dif12} alt="dif12" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden md:flex  items-start gap-2 ml-10">
            <div>
              <img
                onClick={() => enlargeImage(dif4)}
                src={dif4}
                alt="dif4"
                className="w-[360px] h-[260px] object-cover"
              />
              <img
                onClick={() => enlargeImage(dif5)}
                src={dif5}
                alt="dif5"
                className="w-[360px] h-[260px] object-cover mt-2"
              />
            </div>
            <div>
              <img
                onClick={() => enlargeImage(dif8)}
                src={dif8}
                alt="dif8"
                className="w-[360px] h-[260px] object-cover"
              />
              <img
                onClick={() => enlargeImage(dif9)}
                src={dif9}
                alt="dif9"
                className="w-[360px] h-[260px] object-cover mt-2"
              />
            </div>
          </div>
          {enlargedImage && (
            <div className="modal" onClick={closeModal}>
              <img
                id="enlarged-image"
                src={enlargedImage}
                alt="Enlarged"
                className="max-w-screen-h-3/4 mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
    // END HERO COMPONENT
  );
};

export default Hero;
