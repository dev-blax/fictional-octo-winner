import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, PowerIcon } from "@heroicons/react/24/solid";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbMoodHappyFilled } from "react-icons/tb";
import { GiMeditation } from "react-icons/gi";
import { FaCheckDouble } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const { hash, pathname, search } = location;

  return (
    <Card className=" min-h-screen sticky bg-gray-100 w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none ">
      <div className="mb-2 p-4">
        <Link to={"/home"}>
          <Typography variant="h5" color="blue-gray">
            Mental-Marvin
          </Typography>
        </Link>
      </div>
      <List>
        <Link to={"/home/"} className="text-initial ">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link to={"/home/ai-test"} className=" text-initial ">
          <ListItem>
            <ListItemPrefix>
              <RiMentalHealthFill className="h-5 w-5 text-red-500 " />
            </ListItemPrefix>
            A.I Mental Test
          </ListItem>
        </Link>

        <Link to={"/home/mood-tracking"} className=" text-initial ">
          <ListItem>
            <ListItemPrefix>
              <TbMoodHappyFilled className="h-5 w-5 text-green-500" />
            </ListItemPrefix>
            Mood Tracking
          </ListItem>
        </Link>

        <Link to={"/home/mindfulness"} className="text-initial">
          <ListItem>
            <ListItemPrefix>
              <GiMeditation className="h-5 w-5 text-blue-500" />
            </ListItemPrefix>
            Mindfulness Exercises
          </ListItem>
        </Link>

        <Link to={"/home/affirmations"}>
          <ListItem>
            <ListItemPrefix>
              <FaCheckDouble className="h-5 w-5 text-orange-500 " />
            </ListItemPrefix>
            Daily Affirmations
          </ListItem>
        </Link>

        <Link to={"/"}>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}
