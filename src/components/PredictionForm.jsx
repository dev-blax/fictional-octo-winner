import React, { useState } from "react";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    feeling_nervous: "",
    panic: "",
    breathing_rapidly: "",
    sweating: "",
    trouble_in_concentration: "",
    having_trouble_in_sleeping: "",
    having_trouble_with_work: "",
    hopelessness: "",
    anger: "",
    over_react: "",
    change_in_eating: "",
    suicidal_thought: "",
    feeling_tired: "",
    close_friend: "",
    social_media_addiction: "",
    weight_gain: "",
    material_possessions: "",
    introvert: "",
    popping_up_stressful_memory: "",
    having_nightmares: "",
    avoids_people_or_activities: "",
    feeling_negative: "",
    trouble_concentrating: "",
    blamming_yourself: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);  
      setPrediction(result.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        {Object.keys(formData).map((key) => (
          <div key={key} className=" my-4 ">
            <label className=" font-semibold text-gray-700 capitalize">
              {key.replace(/_/g, " ")}:
            </label>
            <div className=" flex gap-4 ">
              <div>
                <input
                  type="radio"
                  name={key}
                  value="yes"
                  checked={formData[key] === "yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </div>
              <div>
                <input
                  type="radio"
                  name={key}
                  value="no"
                  checked={formData[key] === "no"}
                  onChange={handleChange}
                />
                <span>No</span>
              </div>
            </div>
          </div>
        ))}
        <button
          className=" bg-orange-500 px-4 py-2 rounded-xl text-white min-w-[200px] "
          type="submit"
        >
          Predict
        </button>
      </form>
      {prediction && <h2>Prediction: {prediction}</h2>}
    </div>
  );
};

export default PredictionForm;
