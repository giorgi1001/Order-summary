import Description from "../Description/Description";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <img className="hero-img" src="./illustration-hero.svg" alt="hero img" />
      <Description />
    </div>
  );
}
