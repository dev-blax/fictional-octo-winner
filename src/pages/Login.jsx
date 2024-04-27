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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../constants/firebase.config";

export default function Login() {
  const navigate = useNavigate();

  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogErrorCode, setDialogErrorCode] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const validateEmail = (testEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(testEmail);
  };

  const handleSetPassword = ({ target }) => {
    setPassword(target.value);
    updateValidForm();
  }
  const handleSetEmail = ({ target }) => {
    setEmail(target.value);
    setValidEmail(validateEmail(email));
    updateValidForm();
  };

  function updateValidForm(){
    if(email != "" && validEmail && password != '' ){
      setValidForm(true);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed in
        setLoading(false);
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
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
  };

  return (
    <div className=" flex min-h-screen  ">
      <div className=" bg-pattern-1 w-full flex justify-center items-center ">
        <div className=" p-10 rounded-lg shadow-md md:min-w-[500px] bg-gray-300 ">
          <Typography variant="h2"> Sign in </Typography>
          <Typography>
            {" "}
            Navigating Serenity with{" "}
            <span className=" text-soft-blue font-bold ">MentalMaven</span>{" "}
          </Typography>

          {/* Dialog */}
          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader> {dialogErrorCode} </DialogHeader>
            <DialogBody>{dialogMessage}</DialogBody>
            <DialogFooter>
              <Button
                variant="gradient"
                color="blue"
                onClick={handleOpenDialog}
              >
                <span> Try again </span>
              </Button>
            </DialogFooter>
          </Dialog>

          <form onSubmit={handleLogin} className=" flex flex-col gap-5 my-10 ">
            <div>
              <Input
                onChange={handleSetEmail}
                variant="standard"
                label="Email"
                type="email"
                value={email}
              />
            </div>
            <div>
              <Input
                value={password}
                onChange={handleSetPassword}
                variant="standard"
                label="Password"
                type="password"
              />
            </div>

            <div className=" mt-5">
              <Button
                className=" flex items-center justify-center "
                type="submit"
                variant="filled"
                size="lg"
                //color={validForm ? "blue" : "gray"}
                color='blue'
                loading={loading}
                fullWidth
                disabled={validForm}
              >
                SIGN in{" "}
              </Button>
            </div>

            <Link to={"/register"} className=" mt-4">
              <Button
                className=" flex items-center justify-center"
                type="submit"
                variant="outlined"
                size="lg"
                fullWidth
              >
                GO TO SIGN UP{" "}
              </Button>
            </Link>
          </form>
        </div>
      </div>

      <div className=" w-full relative ">
        <img
          src="/background/young.jpg"
          alt="amazing-image"
          className="h-full w-full object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

        <div className="absolute bottom-10 left-10">
          <p className=" text-white bg-opacity-70 p-8 md:w-3/4 md:rounded-lg ">
            " Mental Health is a not destination but{" "}
            <span className=" text-soft-blue font-bold ">a process</span> . It's
            about how you drive, not where you are going." <br /> -- Noam
            Shpancer
          </p>
        </div>
      </div>
    </div>
  );
}
