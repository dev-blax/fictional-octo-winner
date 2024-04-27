import React from 'react';
import { Typography } from "@material-tailwind/react";
import { TbMoodHappyFilled } from "react-icons/tb";


export default function MoodTracking() {
  return (
    <div>
        <div className="flex gap-5 items-center">
        <TbMoodHappyFilled className=" text-3xl text-green-500 " />
        <Typography variant="h4"> Mood Tracking </Typography>
      </div>
    </div>
  )
}
