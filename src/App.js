import { useState } from "react";
import "./App.css";
import { SignUpForm } from "./components/sign-up-form";
import { SuccessMessage } from "./components/success-message";
function App() {
  const [Issuccess, setIsSuccess] = useState(false);
  const btnClickHandler = () => {
    setIsSuccess((s) => !s);
  };
  return (
    <div className="App">
      {!Issuccess ? (
        <SignUpForm onbtnClick={btnClickHandler} />
      ) : (
        <SuccessMessage onbtnClick={btnClickHandler} />
      )}
    </div>
  );
}

export default App;
