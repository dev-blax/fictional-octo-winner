import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MentalTest from "./pages/MentalTest";
import MoodTracking from "./pages/MoodTracking";
import Mindfulness from "./pages/Mindfulness";
import Affirmations from "./pages/Affirmations";
import AiMentalTest from "./pages/AiMentalTest";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} >
          <Route path="" element={<Dashboard />} />
          <Route path="/home/ai-test" element={<AiMentalTest />} />
          <Route path="/home/mood-tracking" element={<MoodTracking />} />
          <Route path="/home/mindfulness" element={<Mindfulness />} />
          <Route path="/home/affirmations" element={<Affirmations />} />
        </Route>
      </Routes>
    </>
  );
}

// App.js

// import React, { useState } from "react";
// import Question from "./components/Question";
// import Result from "./components/Result";

// const questions = [
//   // Your list of 20 questions goes here
//   "Over the past few weeks, have you experienced persistent feelings of sadness or hopelessness?",
//   "Have you lost interest or pleasure in activities that you used to enjoy?",
//   "Do you frequently feel anxious or worried without a clear reason?",
//   "Have you noticed changes in your appetite, either eating significantly more or less than usual?",
//   "Do you struggle with falling asleep or staying asleep, or do you sleep excessively?",
//   "Have you experienced persistent feelings of fatigue or low energy, even after adequate rest?",
//   "Do you have difficulty concentrating on tasks or making decisions?",
//   "Have you noticed a significant increase in irritability or agitation?",
//   "Have you had thoughts of harming yourself or ending your life?",
//   "Do you frequently experience racing thoughts or have trouble slowing down your mind?",
//   "Have you noticed changes in your weight or body image that are causing distress?",
//   "Do you engage in repetitive behaviors or rituals to alleviate anxiety or distress?",
//   "Have you experienced hallucinations or unusual sensory experiences, such as hearing voices?",
//   "Do you have difficulty controlling impulses or engaging in risky behaviors?",
//   "Have you had periods of intense fear or panic attacks?",
//   "Do you avoid certain situations or activities due to intense fear or anxiety?",
//   "Have you experienced periods of unusually high energy or impulsivity, followed by crashes of low mood?",
//   "Do you have trouble regulating your emotions, experiencing intense mood swings?",
//   "Have you noticed changes in your social interactions or relationships, such as withdrawal or conflict?",
//   "Do you experience physical symptoms such as headaches, stomachaches, or muscle tension without a clear medical cause?",
// ];

// function App() {
//   const [responses, setResponses] = useState(Array(20).fill(""));
//   const [showResult, setShowResult] = useState(false);

//   const handleResponseChange = (index, response) => {
//     const newResponses = [...responses];
//     newResponses[index] = response;
//     setResponses(newResponses);
//   };

//   const handleShowResult = () => {
//     setShowResult(true);
//   };

//   return (
//     <div className="App">
//       <h1>Mental Health Disorder Assessment</h1>
//       <div className="questions">
//         {questions.map((question, index) => (
//           <Question
//             key={index}
//             index={index}
//             question={question}
//             onResponseChange={handleResponseChange}
//           />
//         ))}
//       </div>
//       <button onClick={handleShowResult}>Show Result</button>
//       {showResult && <Result responses={responses} />}
//     </div>
//   );
// }

// export default App;
