import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const DeepBreathingExercise = () => {
  return ( 
    <Card className="mt-6 w-96 bg-blue-50">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRpb258ZW58MHwwfDB8fHww"
          alt="card-image"
          className=" object-cover object-center "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Deep Breathing Exercise
        </Typography>
        <ol>
          <li>
            1. Find a comfortable seated or lying position, ensuring your back
            is straight but relaxed.
          </li>
          <li>
            2. Close your eyes and take a few deep breaths through your nose,
            allowing your abdomen to expand as you inhale.
          </li>
          <li>
            3. Exhale slowly through your mouth, releasing any tension or stress
            with each breath.
          </li>
          <li>
            4. Focus your attention on the sensation of your breath as it enters
            and exits your body, noticing the rise and fall of your chest or
            abdomen.
          </li>
          <li>
            5. Continue deep breathing for several minutes, allowing yourself to
            become fully present in the moment and letting go of any
            distractions or worries.
          </li>
        </ol>
      </CardBody>
    </Card>
  );
};

export default DeepBreathingExercise;

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";

// export function CardDefault() {
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img
//           src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//           alt="card-image"
//         />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
//           The place is close to Barceloneta Beach and bus stop just 2 min by
//           walk and near to &quot;Naviglio&quot; where you can enjoy the main
//           night life in Barcelona.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>Read More</Button>
//       </CardFooter>
//     </Card>
//   );
// }
