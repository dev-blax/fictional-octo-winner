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

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} >
          <Route path="" element={<Dashboard />} />
          <Route path="/home/ai-test" element={<MentalTest />} />
          <Route path="/home/mood-tracking" element={<MoodTracking />} />
          <Route path="/home/mindfulness" element={<Mindfulness />} />
          <Route path="/home/affirmations" element={<Affirmations />} />
        </Route>
      </Routes>
    </>
  );
}
