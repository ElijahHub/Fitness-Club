import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BodyParts from "./BodyParts";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <>
      {/* Swiper Component */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // Navigation settings
        modules={[Navigation]} // Add navigation module
      >
        {data.map((item) => (
          <SwiperSlide key={item.id || item}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isBodyParts ? (
                <BodyParts
                  item={item}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <Typography
        className='swiper-button-prev'
        sx={{ position: "absolute", top: "50%", left: "10", zIndex: 10 }}
      ></Typography>
      <Typography
        className='swiper-button-next'
        sx={{ position: "absolute", top: "50%", right: "0", zIndex: 10 }}
      ></Typography>
    </>
  );
};

export default HorizontalScrollbar;
