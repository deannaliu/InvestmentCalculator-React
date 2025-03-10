import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Output from "./components/Output.jsx"

import { useState } from "react";

function App() {
  // states of each input are in an object
  const [inputs, setInputState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const validInputs = inputs.duration > 0;

function setInputHandler(inputIdentifier, newValue) {
  setInputState((prevState) => {
      return {...prevState, 
          [inputIdentifier]: +newValue
      }
  });
}

  return (
    <>
    <Header></Header>
    <UserInput onChange = {setInputHandler} userInput={ inputs }></UserInput>
    {!validInputs && <p className="center">please input a valid duration</p>}
    {validInputs && <Output userInput = { inputs }></Output> }
    </>
  )
}

export default App
