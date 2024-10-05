import React from "react";
import { Exercises, HeroBanner, SearchExercises } from "../components";
import { useState } from "react";
import { Box } from "@mui/material";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setExercises={setExercises}
        setBodyPart={setBodyPart}
      />
      <Exercises
        bodyPart={bodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
