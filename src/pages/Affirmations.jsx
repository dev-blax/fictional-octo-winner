import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaCheckDouble } from "react-icons/fa";


export default function Affirmations() {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <FaCheckDouble className=" text-3xl text-orange-500 " />
        <Typography variant="h4"> Daily Affirmations </Typography>
      </div>
    </div>
  );
}
