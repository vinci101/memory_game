/* eslint-disable react/prop-types */
import "./cardStyle.css";

const Card = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <img className="front" src={card.src} alt="card-front" />
      <img
        className="back"
        src="./img/gift.png"
        alt="card-back"
        onClick={handleClick}
      />
    </div>
  );
};

export default Card;
