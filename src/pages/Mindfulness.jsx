import { Typography } from "@material-tailwind/react";
import React from "react";
import { GiMeditation } from "react-icons/gi";

export default function Mindfulness() {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <GiMeditation className=" text-3xl text-blue-500 " />
        <Typography variant="h4"> Mindfulness Exercises </Typography>
      </div>
    </div>
  );
}
