import React from "react";
import { Typography } from "@material-tailwind/react";
import { Sidebar } from "../components/sidebar";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className=" flex ">
      <div className=" sticky h-screen">
        <Sidebar />
      </div>

      <div className=" w-full ">
        {/* <Dashboard /> */}
        <Outlet />
      </div>
    </div>
  );
}
