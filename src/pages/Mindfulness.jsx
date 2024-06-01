import { Typography } from "@material-tailwind/react";
import React from "react";
import { GiMeditation } from "react-icons/gi";
import DeepBreathingExercise from "../components/DeepBreathingExercise";
import BodyScanMeditation from "../components/BodyScanMeditation";

export default function Mindfulness() {
  return (
    <div className=" p-8">
      <div className="flex gap-5 items-center mb-10">
        <GiMeditation className=" text-3xl text-blue-500 " />
        <Typography variant="h4"> Mindfulness Exercises </Typography>
      </div>

      <div className=" grid grid-cols-2">
        <DeepBreathingExercise />
        <BodyScanMeditation />
      </div>
    </div>
  );
}
