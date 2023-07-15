import { Offers } from "./Offers";
export const Article = () => {
  return (
    <div className="article">
      <div className="title">
        Join 60,000+ product managers receiving monthly updates on:
      </div>
      <Offers>Product discovery and building what matters</Offers>
      <Offers>Measuring to ensure updates are a succes</Offers>
      <Offers>And much more!</Offers>
    </div>
  );
};
