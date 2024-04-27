import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../constants/firebase.config";

export default function Register() {
  const navigate = useNavigate();

  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogErrorCode, setDialogErrorCode] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetPassword = ({ target }) => setPassword(target.value);
  const handleSetEmail = ({ target }) => setEmail(target.value);
  const handleSetPassword2 = ({ target }) => setPassword2(target.value);
  const handleSetUsername = ({ target }) => setUsername(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password == "" || password2 == "" || username == "" || email == "") {
      setDialogErrorCode("Incomplete Form");
      setDialogMessage("please fill all inputs value");
      setOpenDialog(true);
    }

    if (password != password2) {
      setDialogErrorCode("Invalid Form");
      setDialogMessage("Passwords do not match");
      setOpenDialog(true);
    } else {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // signed in
          const user = userCredential.user;
          setLoading(false);
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          setLoading(false);
          setOpenDialog(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          setDialogMessage(errorMessage);
          setDialogErrorCode(errorCode);
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className=" flex flex-row-reverse min-h-screen ">
      <div className=" bg-pattern-1 w-full flex justify-center items-center ">
        <div className=" p-10 rounded-lg shadow-md md:min-w-[500px] bg-gray-300 ">
          <Typography variant="h2"> Sign up </Typography>
          <Typography>
            {" "}
            Navigating Serenity with{" "}
            <span className=" text-soft-blue font-bold ">MentalMaven</span>{" "}
          </Typography>

          {/* Dialog */}
          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader>Error code: {dialogErrorCode} </DialogHeader>
            <DialogBody>{dialogMessage}</DialogBody>
            <DialogFooter>
              <Button
                variant="gradient"
                color="blue"
                onClick={handleOpenDialog}
              >
                <span> Try Again </span>
              </Button>
            </DialogFooter>
          </Dialog>

          <form onSubmit={handleSubmit} className=" flex flex-col gap-5 my-10 ">
            <div>
              <Input
                value={username}
                onChange={handleSetUsername}
                variant="standard"
                label="Username"
              />
            </div>
            <div>
              <Input
                variant="standard"
                label="Email"
                value={email}
                onChange={handleSetEmail}
                type="email"
              />
            </div>
            <div>
              <Input
                variant="standard"
                label="Password"
                value={password}
                onChange={handleSetPassword}
                type="password"
              />
            </div>

            <div>
              <Input
                variant="standard"
                label="confirm Password"
                type="password"
                value={password2}
                onChange={handleSetPassword2}
              />
            </div>

            <div className=" mt-2">
              <Button
                className=" flex items-center justify-center"
                color={email ? "blue" : "gray"}
                type="submit"
                variant="filled"
                size="lg"
                fullWidth
                loading={loading}
              >
                SIGN UP NOW{" "}
              </Button>
            </div>

            <Link to={"/login"} className=" mt-4">
              <Button
                className=" flex items-center justify-center"
                type="submit"
                variant="outlined"
                size="lg"
                fullWidth
              >
                GO TO SIGNIN{" "}
              </Button>
            </Link>
          </form>
        </div>
      </div>

      <div className=" w-full relative ">
        <img src="/services/meditate.jpg" alt="amazing-image" className="h-full w-full object-center object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

        <div className="absolute bottom-10 left-10">
          <p className=" text-white bg-opacity-70 p-8 md:w-3/4 md:rounded-lg ">
            "You do not have to be positive all the time. It's perfectly okay to
            feel sad, angry, annoyed, frustrated, scared or anxious. Having
            feelings doesn't make you a negative person. <span className=" text-soft-blue font-bold ">It makes you human</span>" <br /> --
            Lori Deschene
          </p>
        </div>
      </div>
    </div>
  );
}
