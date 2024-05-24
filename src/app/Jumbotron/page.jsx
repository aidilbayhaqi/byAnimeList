"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { getAnimeResponse } from "../libs/library";



const SectionPage = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await getAnimeResponse("seasons/now", 'limit=10');
      setAnimes(response);
    };

    fetchAnimes();
  }, []);

  return (
    <>
      <div className="jumbotron">
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 30000, disableOnInteraction: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {animes.data?.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <Link href={`/anime/${anime.mal_id}`}>
                <Image
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  width={200}
                  height={200}
                  layout="responsive"
                  className="jumbocard"
                />
                <div className="text-jumbo">
                  <h2>{anime.title}</h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionPage;
