import React from "react";
import RedioComp from "./components/Redio";
import SliderComp from "./components/Slider";

const App = () => {
  const [upperCase, setUpperCase] = React.useState(false);
    const [lowerCase, setLowerCase] = React.useState(false);
    const [numbers, setNumbers] = React.useState(false);
    const [symbols, setSymbols] = React.useState(false);
  const [lenValue, setLenvalue] = React.useState(10);

  

  const generate = (e) => {
    e.preventDefault();
    // console.log(upperCase, lowerCase, numbers, symbols, lenValue);
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const spical = "!@#$%^&*()_+-=[]{};':,./<>?`~";
    let password = "";
    let all = "";
    if (upperCase) {
      all += upper;
    }
    if (lowerCase) {
      all += lower;
    }
    if (numbers) {
      all += num;
    }
    if (symbols) {
      all += spical;
    }
    for (let i = 0; i < lenValue; i++) {
      password += all[Math.floor(Math.random() * all.length)];

    }

    document.querySelector(".finalPass").innerHTML = password;
  }
  return (
    <div
      className="row"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textShadow: "0 0 10px white",
        flexDirection: "column",
      }}
    >
      <div
        className="header"
        style={{
          flex: "0.5",
          // width: '100%',
        }}
      >
        <h1 className="text-white text-center m-5">Password Generator</h1>
      </div>

      <div
        className="card col-lg-6 col-md-8 col-sm-10  col-xs-12 m-1 mb-3"
        style={{
          backgroundColor: "white",
          boxShadow: "0 0 10px gray",
          flex: "1",
        }}
      >
        <div className="m-4">
          <h2 className="text-center">Start here</h2>
        </div>
        <div
          className="
      row
      "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            className="col-lg-6 col-md-8 col-sm-10 col-xs-12"
            style={{
              borderBottom: "1px solid gray",
            }}>
            <SliderComp 
            lenValue={lenValue}
            setLenvalue={setLenvalue}
            />
          </div>
          <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
            <RedioComp setUpperCase={setUpperCase}
            setLowerCase={setLowerCase}
            setNumbers={setNumbers}
            setSymbols={setSymbols}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row d-flex justify-content-center">
        <button className=" col-4 btn btn-secondary mb-4" onClick={generate}>Generate Password</button>
            <h4 className="text-center w-75">
              your password is: <br/>
              <br/>
              <span className="text-primary mb-3">
                <strong className="finalPass"></strong>
              </span>
            </h4>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default App;
