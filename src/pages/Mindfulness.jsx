import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import { GiMeditation } from "react-icons/gi";
import DeepBreathingExercise from "../components/DeepBreathingExercise";
import BodyScanMeditation from "../components/BodyScanMeditation";
import ThemeButton from "../components/ThemeButton";
import LinkButton from "../components/LinkButton";
import ExerciseCard from "../components/ExerciseCard";

export default function Mindfulness() {
  // handle exercise view
  const handleViewExercise = () => {
    console.log("button was clicked");
  };

  // main return
  return (
    <div className=" p-8">
      <div className="flex gap-5 items-center mb-10">
        <GiMeditation className=" text-3xl text-blue-500 " />
        <Typography variant="h4"> Mindfulness Exercises </Typography>
      </div>

      <div className=" grid grid-cols-4 gap-5">
        <ExerciseCard
          description={
            " A mindfulness practice that involves paying attention to various parts of your body, starting from the feet and moving upwards."
          }
          linkHref={"/home"}
          title={"Body Scan Meditation"}
          imageSrc={
            "https://images.unsplash.com/photo-1516827003699-2880f453d93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9keSUyMHNjYW58ZW58MHx8MHx8fDA%3D"
          }
        />

        <div className=" shadow-md p-3 rounded-md ">
          <img
            className=" h-64  w-full object-cover object-center rounded-md"
            src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYXRoaW5nfGVufDB8fDB8fHww"
            alt=""
          />
          <h2> Mindful Breathing </h2>
          <h5 className=" text-xs text-gray-600">
            A basic mindfulness exercise that focuses on observing your breath
            to center your mind.
          </h5>
        </div>

        <div className=" shadow-md p-3 rounded-md ">
          <img
            className=" h-64  w-full object-cover object-center rounded-md"
            src="https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h2> Mindful Eating </h2>
          <h5 className=" text-xs text-gray-600">
            {" "}
            Eating with full attention to the experience, savoring each bite,
            and noticing the taste, texture, and smell of your food.
          </h5>
        </div>

        <div className=" shadow-md p-3 rounded-md ">
          <img
            className=" h-64  w-full object-cover object-center rounded-md"
            src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2luZG5lc3N8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h2> Loving-Kindness Meditation (Metta) </h2>
          <h5 className=" text-xs text-gray-600">
            {" "}
            A practice that involves sending thoughts of love and kindness to
            yourself and others.
          </h5>
        </div>
        <div className=" shadow-md p-3 rounded-md ">
          <img
            src="https://images.unsplash.com/photo-1538471726790-0f6b031f1982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGtpbmd8ZW58MHx8MHx8fDA%3D"
            className=" h-64  w-full object-cover object-center rounded-md"
            alt=""
          />
          <h2> Mindful Walking </h2>
          <h5 className=" text-xs text-gray-600">
            {" "}
            A practice of walking slowly and deliberately, paying full attention
            to each step and the sensations it brings.
          </h5>
        </div>

        <div className=" shadow-md p-3 rounded-md ">
          <img
            className=" h-64  w-full object-cover object-center rounded-md"
            src="https://images.unsplash.com/photo-1593612093126-a7ad547e9936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdmUlMjBzZW5zZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h2> Five Senses Exercise </h2>
          <h5 className=" text-xs text-gray-600">
            {" "}
            A quick grounding exercise that involves paying attention to your
            environment through your five senses.
          </h5>
        </div>
        {/* <DeepBreathingExercise />
        <BodyScanMeditation /> */}
      </div>
    </div>
  );
}
