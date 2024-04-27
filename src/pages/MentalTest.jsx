import { Typography } from "@material-tailwind/react";
import React from "react";
import { RiMentalHealthFill } from "react-icons/ri";

export default function MentalTest() {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <RiMentalHealthFill className=" text-3xl text-red-500 " />
        <Typography variant="h4"> A.I Mental Health Test </Typography>
      </div>
    </div>
  );
}
