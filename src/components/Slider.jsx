import React from "react";
import { Slider } from "antd";
const SliderComp = ({
    lenValue,
    setLenvalue,
}) => {
  const handleChange = (value) => {
    setLenvalue(value);
    console.log(lenValue);
    document.querySelector(".length-value").innerHTML = value;

  };
  return (
    <div>
      <h4
        className="length w-100">
        Length: <span className="length-value "></span>
      </h4>
      <Slider
        value={lenValue}
        onChange={handleChange}
        defaultValue={10}
        min={10}
        max={100}
      />
      <br />
      <br />
    </div>
  );
};

export default SliderComp;
