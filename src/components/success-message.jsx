import { Btn } from "./Btn";

export const SuccessMessage = ({ onbtnClick }) => {
  return (
    <div className="success-message-container">
      <img src="icon-success.svg" alt="success-logo" />
      <div className="title">Thanks for subscribing!</div>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <Btn className="btn" onClick={() => onbtnClick()}>
        Dismiss message
      </Btn>
    </div>
  );
};
