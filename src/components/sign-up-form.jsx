import { Header } from "./header";
import { Article } from "./Article";
import { Form } from "./Form";
import { Footer } from "./footer";
export const SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <div className="left">
        <Header>Stay updated!</Header>
        <Article />
        <Form />
        <Footer />
      </div>
      <div className="right">
        <img
          src="illustration-sign-up-desktop.svg"
          alt="illustration-sign-up"
        />
      </div>
    </div>
  );
};
