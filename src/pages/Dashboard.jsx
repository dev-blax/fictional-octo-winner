import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className=" flex flex-col gap-10 p-5 ">
      <div className=" flex flex-col">
        <Typography variant="h3"> Hello there, </Typography>
        <Typography variant="small"> Welcome Back! </Typography>
      </div>

      <div className=" flex gap-5 ">
        <Link to={'/home/ai-test'} className=" w-full aspect-square relative animate-slide-in-from-left hover:-translate-y-2 hover:delay-100 ease-in hover:shadow-2xl ">
          <img
            src="https://images.pexels.com/photos/3762807/pexels-photo-3762807.jpeg?auto=compress&cs=tinysrgb&w=600"
            className=" h-full w-full object-center object-cover rounded-md shadow-md "
            alt="ai-mental-test-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-md"></div>
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className=" text-xl  "> A.I Mental Test </h1>

          </div>
        </Link>
        <Link to={'/home/mindfulness'} className=" w-full aspect-square relative animate-slide-in-from-left hover:-translate-y-2  hover:delay-100 ease-in hover:shadow-2xl ">
          <img
            src="/services/meditate.jpg"
            className=" h-full w-full object-center object-cover rounded-md shadow-md "
            alt="something"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-md"></div>
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <Typography variant="lead"> Mindfulnes </Typography>
          </div>
        </Link>
        <Link to={'/home/mood-tracking'} className=" w-full aspect-square relative animate-slide-in-from-left hover:-translate-y-2 hover:delay-100 ease-in hover:shadow-2xl ">
          <img
            src="/services/smiley.jpg"
            className=" h-full w-full object-center object-cover rounded-md shadow-md "
            alt="something"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-md"></div>
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className=" text-xl  "> Mood Tracking </h1>
          </div>
        </Link>
        <Link to={'/home/affirmations'} className=" w-full aspect-square relative animate-slide-in-from-left duration-1000 hover:-translate-y-2 hover:delay-100 ease-in hover:shadow-2xl ">
          <img
            src="/services/cute.jpg"
            className=" h-full w-full object-center object-cover rounded-md shadow-md "
            alt="something"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-md"></div>
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <Typography variant="lead"> Affirmations </Typography>
          </div>
        </Link>
      </div>
    </div>
  );
}
