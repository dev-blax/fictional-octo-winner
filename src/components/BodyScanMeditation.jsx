import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const BodyScanMeditation = () => {
  return (
    <Card className="mt-6 w-96 bg-blue-50 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card-image"
          className=" object-cover object-center "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Body Scan Meditation
        </Typography>
        <ol>
          <li>
            1. Find a comfortable lying position on your back, either on a yoga mat or a comfortable surface.
          </li>
          <li>
            2. Close your eyes and take a few deep breaths to center yourself.
          </li>
          <li>
            3. Start at the top of your head and slowly scan down through your body, paying attention to any sensations you notice along the way.
          </li>
          <li>
            4. As you scan each body part, consciously relax any tension you may be holding, allowing your muscles to soften and release.
          </li>
          <li>
            5. Continue scanning down through your entire body, from your head to your toes, taking your time and being fully present in each moment.
          </li>
        </ol>
      </CardBody>
    </Card>
  );
};

export default BodyScanMeditation;