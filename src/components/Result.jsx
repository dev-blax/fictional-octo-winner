// Result.js

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Result({ responses, HideResult }) {
  // Initialize counters for different disorder categories
  let depressionCount = 0;
  let anxietyCount = 0;
  let bipolarCount = 0;
  let psychoticCount = 0;
  let eatingDisorderCount = 0;
  let impulseControlCount = 0;

  // Loop through user responses
  responses.forEach((response, index) => {
    switch (index) {
      // Depression-related questions
      case 0: // Persistent feelings of sadness
      case 1: // Loss of interest or pleasure
      case 3: // Changes in appetite
      case 4: // Changes in sleep patterns
      case 6: // Difficulty concentrating
        if (response === "yes") {
          depressionCount += 1;
        } else if (response === "maybe") {
          depressionCount += 0.5;
        }
        break;
      // Anxiety-related questions
      case 2: // Frequent feelings of anxiety or worry
      case 5: // Difficulty falling asleep or staying asleep
      case 12: // Hallucinations or unusual sensory experiences
      case 16: // Avoidance of certain situations due to fear or anxiety
        if (response === "yes") {
          anxietyCount += 1;
        } else if (response === "maybe") {
          anxietyCount += 0.5;
        }
        break;
      // Bipolar disorder-related questions
      case 9: // Racing thoughts or difficulty slowing down
      case 15: // Panic attacks or intense fear
      case 17: // Periods of unusually high energy followed by crashes
        if (response === "yes") {
          bipolarCount += 1;
        } else if (response === "maybe") {
          bipolarCount += 0.5;
        }
        break;
      // Psychotic disorder-related questions
      case 13: // Difficulty controlling impulses or engaging in risky behaviors
      case 19: // Physical symptoms without clear medical cause
        if (response === "yes") {
          psychoticCount += 1;
        } else if (response === "maybe") {
          psychoticCount += 0.5;
        }
        break;
      // Eating disorder-related questions
      case 10: // Changes in weight or body image
        if (response === "yes") {
          eatingDisorderCount += 1;
        } else if (response === "maybe") {
          eatingDisorderCount += 0.5;
        }
        break;
      // Impulse control disorder-related questions
      case 7: // Increase in irritability or agitation
      case 8: // Thoughts of harming oneself or ending one's life
      case 11: // Repetitive behaviors or rituals
      case 14: // Difficulty controlling impulses or engaging in risky behaviors
      case 18: // Engaging in risky behaviors
        if (response === "yes") {
          impulseControlCount += 1;
        } else if (response === "maybe") {
          impulseControlCount += 0.5;
        }
        break;
      default:
        // For other questions, we don't consider them in this simplified version
        break;
    }
  });

  // Determine the result based on the highest count
  let result;
  const categories = {
    Depression: depressionCount,
    Anxiety: anxietyCount,
    "Bipolar Disorder": bipolarCount,
    "Psychotic Disorders": psychoticCount,
    "Eating Disorders": eatingDisorderCount,
    "Impulse Control Disorders": impulseControlCount,
  };

  const maxCount = Math.max(...Object.values(categories));

  const matchingCategories = Object.keys(categories).filter(
    (category) => categories[category] === maxCount
  );

  if (matchingCategories.length === 1) {
    result = matchingCategories[0];
  } if(matchingCategories.length > 1){
    result = `${matchingCategories[0]} and ${matchingCategories[1]}`
  } else if (matchingCategories.length < 1){
    result = 'You have no Mental Health Problem';
  } else {
    result = "No clear result";
  }

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(!open);

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader> Mental Health Disorder Prediction </DialogHeader>
      <DialogBody>
        
        <section>Prediction: {result}</section>
       <p>
        <header className=" mt-8 text-sm"> Recommendations will appear here </header>
        
       </p>
      
      </DialogBody>

      <DialogFooter>
        <Button variant="gradient" color="blue" onClick={HideResult}>
          <span>Ok</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default Result;
