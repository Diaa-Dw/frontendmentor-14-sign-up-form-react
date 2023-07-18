import { Header } from "./header";
import { Article } from "./Article";
import { Form } from "./Form";
import { Footer } from "./footer";
export const SignUpForm = ({ onbtnClick }) => {
  return (
    <div className="sign-up-form">
      <div className="left">
        <Header>Stay updated!</Header>
        <Article />
        <Form onbtnClick={onbtnClick} />
        <Footer />
      </div>
      <div className="right"></div>
    </div>
  );
};
