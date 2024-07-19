/* eslint-disable react/prop-types */
import "./cardStyle.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src="./img/gift.png"
          alt="card-back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
