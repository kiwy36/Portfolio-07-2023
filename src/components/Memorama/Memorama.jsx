/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './Memorama.css';

const Memorama = () => {
  const [time, setTime] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const images = [
    'https://i.ibb.co/JpLP4cb/dino-08.jpg',
    'https://i.ibb.co/TqQF1kk/dino-09.jpg',
    'https://i.ibb.co/LJVSrGC/dino-01.jpg',
    'https://i.ibb.co/4wyV7yZ/dino-05.jpg',
    'https://i.ibb.co/nw97v1C/dino-02.jpg',
    'https://i.ibb.co/9TDpp5H/dino-07.jpg',
    'https://i.ibb.co/nCJWkFn/dino-06.jpg',
    'https://i.ibb.co/0BPY8j1/dino-03.jpg',
    'https://i.ibb.co/Vt8ymRt/dino-00.jpg',
  ];

  const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);

  useEffect(() => {
    let interval;
    if (gameRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [gameRunning, time]);

  useEffect(() => {
    if (time === 0 && gameRunning) {
      setGameLost(true);
      setGameRunning(false);
      setGameFinished(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, moves]);

  useEffect(() => {
    if (gameStarted) {
      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (cards[card1] === cards[card2]) {
          setMatchedCards((prevMatchedCards) => [...prevMatchedCards, card1, card2]);
          setFlippedCards([]);
          setSuccessCount((prevSuccessCount) => prevSuccessCount + 1);
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }
        setMoves((prevMoves) => prevMoves + 1);
      }
    }
  }, [flippedCards, cards, gameStarted]);

  useEffect(() => {
    if (successCount === images.length) {
      setGameWon(true);
      setGameRunning(false);
    }
  }, [successCount, images.length]);

  const startGame = () => {
    if (gameWon) {
      setFlippedCards([]);
      setMatchedCards([]);
    }
    setTime(120);
    setGameStarted(true);
    setCards(shuffledImages);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setSuccessCount(0);
    setGameLost(false);
  };
  const flipCard = (index) => {
    if (gameWon) {
      return;
    }
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
      setMoves((prevMoves) => prevMoves + 1);
      if (moves >= 100) {
        setGameLost(true);
      }
    }
  };

  const restartGame = () => {
    setGameLost(false);
    setGameWon(false);
    setGameFinished(false);
    startGame();
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      const isFlipped = flippedCards.includes(index);
      const isMatched = matchedCards.includes(index);
      const imageUrl = isFlipped || isMatched ? card : '';

      return (
        <td key={`card-${index}`}>
          <button
            className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
            onClick={() => flipCard(index)}
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></button>
        </td>
      );
    });
  };

  const renderStartButton = () => {
    if (gameLost) {
      return <button className="iniciador" onClick={restartGame}>Volver a Jugar</button>;
    } else if (gameWon) {
      return <button className="iniciador" onClick={restartGame}>Jugar de Nuevo</button>;
    } else {
      return (
        <button className="iniciador" onClick={() => {
          if (gameRunning) {
            setGameRunning(false);
            setGameStarted(false);
          } else {
            setGameRunning(true);
            startGame();
          }
        }}>
          {gameRunning ? 'Detener Juego' : 'Iniciar Juego'}
        </button>
      );
    }
  };

  return (
    <main id="inicio" className="memorama">
      <section className="contenido-seccion">
        <h1>Memorama Saurio</h1>
        <table>
          <tbody>
            <tr>{renderCards()}</tr>
          </tbody>
        </table>
      </section>
      <section className="gameData">
        {gameLost ? (
          <h2 className="gameLost">¡Has perdido! Movimientos realizados: {moves}</h2>
        ) : gameWon ? (
          <h2 className="gameWon">¡Ganaste! ¡Felicitaciones!</h2>
        ) : (
          <>
            <h2 className="aciertos estadisticas">Aciertos: <span id="contador_aciertos">{successCount}</span></h2>
            <h2 className="t-restantes estadisticas">Tiempo: <span id="contador_cronometro">{time}</span> segundos</h2>
            <h2 className="movimientos estadisticas">Movimientos: <span id="contador_estadisticas">{moves}</span></h2>
          </>
        )}
        {renderStartButton()}
      </section>
    </main>
  );
};

export default Memorama;

