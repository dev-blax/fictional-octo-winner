import { Typography } from "@material-tailwind/react";
import { RiMentalHealthFill } from "react-icons/ri";
import { useState } from "react";
import Question from "../components/Question";
import Result from "../components/Result";

export default function MentalTest() {

  const questions = [
    "Over the past few weeks, have you experienced persistent feelings of sadness or hopelessness?",
    "Have you lost interest or pleasure in activities that you used to enjoy?",
    "Do you frequently feel anxious or worried without a clear reason?",
    "Have you noticed changes in your appetite, either eating significantly more or less than usual?",
    "Do you struggle with falling asleep or staying asleep, or do you sleep excessively?",
    "Have you experienced persistent feelings of fatigue or low energy, even after adequate rest?",
    "Do you have difficulty concentrating on tasks or making decisions?",
    "Have you noticed a significant increase in irritability or agitation?",
    "Have you had thoughts of harming yourself or ending your life?",
    "Do you frequently experience racing thoughts or have trouble slowing down your mind?",
    "Have you noticed changes in your weight or body image that are causing distress?",
    "Do you engage in repetitive behaviors or rituals to alleviate anxiety or distress?",
    "Have you experienced hallucinations or unusual sensory experiences, such as hearing voices?",
    "Do you have difficulty controlling impulses or engaging in risky behaviors?",
    "Have you had periods of intense fear or panic attacks?",
    "Do you avoid certain situations or activities due to intense fear or anxiety?",
    "Have you experienced periods of unusually high energy or impulsivity, followed by crashes of low mood?",
    "Do you have trouble regulating your emotions, experiencing intense mood swings?",
    "Have you noticed changes in your social interactions or relationships, such as withdrawal or conflict?",
    "Do you experience physical symptoms such as headaches, stomachaches, or muscle tension without a clear medical cause?",
  ];

  const [responses, setResponses] = useState(Array(20).fill(""));
  const [showResult, setShowResult] = useState(false);

  const handleResponseChange = (index, response) => {

    console.log('response ',response);
    const newResponses = [...responses];
    newResponses[index] = response;
    setResponses(newResponses);
  };

  const handleShowResult = () => {
    console.log('clicked');
    setShowResult(true);
  };

  const hideResult = ()=>{
    setShowResult(false);
  }

  return (
    <div className=" bg-gray-200 px-5 py-3 ">
      <div className="flex gap-5 items-center">
        <RiMentalHealthFill className=" text-3xl text-red-500 " />
        <Typography variant="h4"> A.I Mental Health Test </Typography>
      </div>

      <div className=" mt-8">
        {questions.map((question, index) => (
          <Question
          key={index}
          index={index}
          question={question}
          onResponseChange={handleResponseChange}
          />
        ))}
      </div>

      <button onClick={handleShowResult} className=" px-4 py-2 rounded-lg bg-blue-500 shadow-md text-gray-200 "> Show Results </button>
      {showResult && <Result HideResult={hideResult} responses={responses} />}

    </div>
  );
}
