import Description from "../Description/Description";
import "./Card.css";
import Hero from "/illustration-hero.svg";

export default function Card() {
  return (
    <div className="card">
      <img className="hero-img" src={Hero} alt="hero img" />
      <Description />
    </div>
  );
}
