import React from "react";
import LinkButton from "./LinkButton";

function ExerciseCard({ imageSrc, title, description, linkHref}) {
  return (
    <div className=" shadow-md p-3 rounded-md ">
      <img
        className=" h-64 w-full object-cover object-center rounded-md"
        src={imageSrc}
        alt=""
      />
      <h2 className=""> {title} </h2>
      <h5 className=" text-xs text-gray-600">
        {description}
      </h5>

      <LinkButton href={linkHref}> Try Now </LinkButton>
    </div>
  );
}

export default ExerciseCard;
