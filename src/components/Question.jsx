// Question.js
import { Radio } from "@material-tailwind/react";
import React from "react";

function Question({ index, question, onResponseChange }) {
  const handleResponseChange = (event) => {
    onResponseChange(index, event.target.value);
  };

  return (
    <div className="question mb-3">
      <p className=" ">{question}</p>
      <div>
        {/* <label>
          <input
            className=""
            type="radio"
            name={`question${index}`}
            value="yes"
            onChange={handleResponseChange}
          />
          Yes
        </label>
        
        <label>
          <input
            type="radio"
            name={`question${index}`}
            value="no"
            onChange={handleResponseChange}
          />
          No
        </label>
        <label>
          <input
            type="radio"
            name={`question${index}`}
            value="maybe"
            onChange={handleResponseChange}
          />
          Maybe
        </label> */}

        <Radio value='yes' name={`question${index}`} label="Yes" onChange={handleResponseChange} />
        <Radio value='no' name={`question${index}`} label="No" onChange={handleResponseChange} />
        <Radio value='maybe' name={`question${index}`} label="Maybe" onChange={handleResponseChange} />
      </div>
    </div>
  );
}

export default Question;
