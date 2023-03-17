import React from "react";
import { Switch } from "antd";
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const RedioComp = ({ setUpperCase, setLowerCase, setNumbers, setSymbols }) => {
  const list = ["uppercase", "lowercase", "numbers", "symbols"];
  const onChangeUpper = (checked) => {
    console.log(`switch to ${checked}`);
    setUpperCase(checked);
    // console.log(upperCase);
  };

  const onChangeLower = (checked) => {
    console.log(`switch to ${checked}`);
    setLowerCase(checked);
    // console.log(lowerCase);
  };

  const onChangeNumbers = (checked) => {
    console.log(`switch to ${checked}`);
    setNumbers(checked);
    // console.log(numbers);
  };

  const onChangeSymbols = (checked) => {
    console.log(`switch to ${checked}`);
    setSymbols(checked);
    // console.log(symbols);
  };

  return (
    <div>
      <h4 className="include w-100 mt-4 mb-4 text-center">Include:</h4>
      <div className="d-flex  flex-column justify-content-center  gap-4">
        <div className="d-flex justify-content-between  align-items-center">
          <h4 className="uppercase text-center">Uppercase</h4>
          <Switch onChange={onChangeUpper} />
          <span className="text-secondary text-muted small">ABCD....XYZ</span>
        </div>
        <div className="d-flex justify-content-between  align-items-center">
          <h4 className="lowercase text-center">Lowercase</h4>
          <Switch onChange={onChangeLower} />
          <span className="text-secondary text-muted small">abcd....xyz</span>
        </div>
        <div className="d-flex justify-content-between  align-items-center">
          <h4 className="numbers text-center">Numbers</h4>
          <Switch onChange={onChangeNumbers} />
          <span className="text-secondary text-muted small">1234....7890</span>
        </div>
        <div className="d-flex justify-content-between  align-items-center">
          <h4 className="symbols text-center">Symbols</h4>
          <Switch onChange={onChangeSymbols} />
          <span className="text-secondary text-muted small">!@#$....%^&*</span>
        </div>
      </div>
    </div>
  );
};

export default RedioComp;
