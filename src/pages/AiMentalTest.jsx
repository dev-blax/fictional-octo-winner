import React from "react";
import PredictionForm from "../components/PredictionForm";

export default function AiMentalTest() {
  return (
    <div>
      <header className=" text-3xl font-bold p-5 text-orange-500 ">
        {" "}
        Mental Health Prediction{" "}
      </header>
      <hr className=" text-gray-800" />
      <div className=" p-5 h-full ">
        <PredictionForm />
      </div>
    </div>
  );
}
