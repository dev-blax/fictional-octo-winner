import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { TbMoodHappyFilled } from "react-icons/tb";
import { Select, Option } from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";
export default function MoodTracking() {
  return (
    <div className=" p-8 ">
      <div className="flex flex-col gap-5 ">
        <div className=" flex gap-5 items-center">
          <TbMoodHappyFilled className=" text-3xl text-green-500 " />
          <Typography variant="h4"> Mood Tracking </Typography>
        </div>
        <Typography variant="small" className=" text-gray-500">
          {" "}
          Take your time and describe how you feel..!{" "}
        </Typography>

        <form className=" bg-blue-50 p-8 rounded-md shadow-md ">

          <Typography className=" mb-12 font-bold "> Mood Tracking Form </Typography>
          {/* current mood */}
          <div className="w-72 mb-8">
            <Select label="Select Current Mood" variant="static">
              <Option> Happy</Option>
              <Option>Sad</Option>
              <Option>Anxious</Option>
              <Option>Angry</Option>
              <Option>Calm</Option>
              <Option>Stressed</Option>
              <Option>Excited</Option>
              <Option>Irritable</Option>
              <Option>Neutral</Option>
              <Option>Other</Option>
            </Select>
          </div>

          {/* energy level */}
          <div className=" w-72 mb-8">
            <Select label="Energy level" variant="static">
              <Option> High</Option>
              <Option>Medium</Option>
              <Option>Low</Option>
            </Select>
          </div>

          {/* sleep quality */}
          <div className=" w-72 mb-8">
            <Select label="Rate the quality of your sleep" variant="static">
              <Option> Excellent</Option>
              <Option>Good</Option>
              <Option>Fair</Option>
              <Option>Poor</Option>
              <Option>Very Poor</Option>
            </Select>
          </div>

          {/* Appetite */}
          <div className=" w-72 mb-8">
            <Select label="Your Appetite Level" variant="static">
              <Option> Very Hungry</Option>
              <Option>Hungry</Option>
              <Option>Normal</Option>
              <Option>Less Hungry</Option>
              <Option>Not Hungry</Option>
            </Select>
          </div>

          {/* Appetite */}
          <div className=" w-80 mb-8">
            <Select
              label="Do you have an physical symptoms? (optional)"
              variant="static"
            >
              <Option> Headache </Option>
              <Option>Muscle Tension</Option>
              <Option>Fatigue</Option>
              <Option>Nausea</Option>
              <Option>Dizziness</Option>
              <Option>Racing Heart</Option>
            </Select>
          </div>

          {/* Appetite */}
          <div className=" w-80 mb-8">
            <Select
              label="Do you have an Emotional symptoms? (optional)"
              variant="static"
            >
              <Option> Crying spells </Option>
              <Option> Mood Swings </Option>
              <Option>Hopelessness</Option>
              <Option>Guilt</Option>
              <Option>Worthlessness</Option>
              <Option>Irritability</Option>
              <Option>Other</Option>
            </Select>
          </div>

          <div className="w-96">
            <Textarea label="Notes (optional)" />
          </div>

          <Button color="blue"> Confirm Mood Track </Button>
        </form>
      </div>
    </div>
  );
}
