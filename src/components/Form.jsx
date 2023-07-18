import { useState } from "react";
import { Btn } from "./Btn";

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export const Form = ({ onbtnClick }) => {
  const [email, setEmail] = useState("");

  const btnClickHandler = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      onbtnClick();
    } else {
      return;
    }
  };

  return (
    <form className="email-form">
      <label>Email address</label>
      <input
        type="email"
        placeholder="email@compony.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <span>Valid email required</span>
      <Btn type="submit" className="btn" onClick={(e) => btnClickHandler(e)}>
        Subscribe to monthly newsletter
      </Btn>
    </form>
  );
};
