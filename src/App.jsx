import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImg = [
  { src: "./img/plane.png" }, //<a href="https://www.flaticon.com/free-icons/message" title="message icons">Message icons created by Freepik - Flaticon</a>
  { src: "./img/heart.png" }, //<a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a>
  { src: "./img/bat.png" }, //<a href="https://www.flaticon.com/free-icons/paper" title="paper icons">Paper icons created by Freepik - Flaticon</a>
  { src: "./img/fish.png" }, //<a href="https://www.flaticon.com/free-icons/art-and-design" title="art and design icons">Art and design icons created by Freepik - Flaticon</a>
  { src: "./img/elephant.png" }, //<a href="https://www.flaticon.com/free-icons/art-and-design" title="art and design icons">Art and design icons created by Freepik - Flaticon</a>
  { src: "./img/butterfly.png" }, //<a href="https://www.flaticon.com/free-icons/art" title="art icons">Art icons created by Freepik - Flaticon</a>
]; //<a href="https://www.flaticon.com/free-icons/origami" title="origami icons">Origami icons created by Freepik - Flaticon</a>

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCard = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.4)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    console.log(card);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {/* <img src={"./img/plane.png"} alt="img" /> */}
      <button onClick={shuffleCard}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default App;
