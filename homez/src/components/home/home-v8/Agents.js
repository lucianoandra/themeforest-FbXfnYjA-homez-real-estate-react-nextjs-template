"use client";
import agents from "@/data/agents";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Agents = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000, // Set the desired delay for autoplay
          disableOnInteraction: false, // Keep autoplaying even when user interacts with the swiper
        }}
      >
        {agents.slice(0, 7).map((agent, index) => (
          <SwiperSlide key={index}>
            <div className="item" key={index}>
              <Link  href={`/agent-single/${agent.id}`}>
                <div className="team-style1 mb30">
                  <div className="team-img">
                    <Image
                      width={217}
                      height={248}
                      className="w-100 h-100 cover"
                      src={agent.image}
                      alt="agent team"
                    />
                  </div>
                  <div className="team-content pt20">
                    <h6 className="name mb-1">{agent.name}</h6>
                    <p className="text fz15 mb-0">Broker</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Agents;
