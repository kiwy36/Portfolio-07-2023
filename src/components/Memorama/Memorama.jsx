/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './Memorama.css';

const Memorama = () => {
  const [showGame, setShowGame] = useState(false);
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
    'https://lh3.googleusercontent.com/pw/AP1GczM3MytyH9OZEYw1bA2Kd8MwLTymj1OBadkbOwUDuUNZv3ZY2yYKG29YSAKiD0TTolai2sLEcDIIPpl2RsxVNmDr0X-s72_oB9ytY1LWaJPT_VhE5Jrj6vUs_Q3VNS22PcJgV8pjdjMon7N4gI-qKsWRvg=w453-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNc0dzMZ6QbxtlDWmfXmOVrLs2dRj4h4glxJE0-K_wcnXrJX9SOQR90JYH_3o8RHl6rIdz3f3XlRrC6pr8uYVMh2JLJGwI1wBYMU7GeuEswFFqALdMMoagTlppDRj_fPrDa8IMJ6wA6jtEQlhpZ_pug0Q=w347-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczOTMOYMSKFl0rs_D8CIoVVC85wxVaHdBj32B6W1kVw8AJnWg-ovoBSBXmlbOOBuGV5jZ6bOdZwE1tLFRROjDt5apwlBJ4fLIEDoteCDDTeA5_A4jx6P9cDjXIUHT-ADf4-JmuQATk0r-k9KQlWZKsv2VA=w348-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczM2JwghpPDJfnEiCzlbqMdb09j-Eh9f4ekfofyqgUGRUJEYqhicTiUFG_k2_rgB-MM0cJp3zAjolpLYUG7mA9jJfD48-IaiV9AgFPV1xBjgERZrtSevl_80UHChWBrGSQSREa8R1ciYBnl01Hb1kXUAUw=w348-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczO2zRM8lJeqHiVaVBUG4g4-45Y2J4UxqVGT9tVwWVmnkhrh6Gkez1wKqqhaPBtOAOTZiTjJyXVhCIBm6CGi0ayzyU0O0w75mvLU2eFVFWUynGMFulEIjpfw5JK8_DZdSpX4ZWjjNxVoa8ytNe_VHzCaZA=w348-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczO8uNg7ahEvzN239TUge66qanr6-qLwxDthMCiS5KpSmIu1unrrELuE189aMLSAavNBQ3prULq30-DpHKT4DjWaqkxVEwmEmhhpn7s9Cp5MpyxxqObe0uqlU7lbmgPV7BNI0dHBGz8sQAeHQS6NJOCeEQ=w413-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczNPJSS0lwW2Uj_Ehr7SpGH59c0VkVH30S6E9rtMaB-VltOM6c21WjQvK936yuPPRFofY6ZWrsznuPWr7nDSU0npngBOR6evAg3uzL_ChUjhl-_Fgljc5TjN4DJxL6dtQ0iQ2NGxjXK0y8cQaZJzm9WPtg=w348-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMAc1q3sQVhqaqCq6p2mzEdGxi44W0hC8wnC2lJtJq4t1e5xQKiujO_joO6GeZymjblYF26vzLaU8n6cxhiN0HqJhrc4KB884KSsAo1Y6y7MDtU08UnkXSOj_diyfatG9Ugkn3imMaeOux46PoMomuwNw=w376-h618-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AP1GczMOU5FMUBDV_YeIEMQIsKMLzp6QG7rEf270zYNDzjGV8c53HzDzs2PGBkkvpxhMgrDCX9QXL5wfwepg29ES5lQ9RKYgMW45d-P-JDEcVcptifas_BXW9CYYhEa6uRo9hXVsBAm9zYT9Ctp3M9fMs-JtYw=w349-h618-s-no?authuser=0',
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
  const startGameHandler = () => {
    startGame();
    setShowGame(true); // Mostrar el juego al iniciar
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
    if(showGame){
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
    }else { // Si el juego no ha comenzado, mostramos el botón "Comenzar a jugar"
      return <button className="iniciador" onClick={() => setShowGame(true)}>Comenzar a Jugar</button>;
    }
  };

  return (
    <main id="inicio" className="memorama">
      <section className="contenido-seccion">
        <h1 className='memo-title'>Memorama Saurio</h1>
        {showGame ? ( // Si el juego está en curso, mostramos las cartas
          <table className='memo-game'>
            <tbody>
              <tr>{renderCards()}</tr>
            </tbody>
          </table>
        ) : ( // Si el juego no ha comenzado, mostramos el botón "Comenzar a jugar"
          <button className="iniciador" onClick={startGameHandler}>
            Comenzar a Jugar
          </button>
        )}
      </section>
      {showGame && ( // Mostramos los elementos del juego solo si el juego ha comenzado
        <section className="gameData">
          {gameLost ? (
            <h2 className="gameLost">¡Has perdido! <br/>Movimientos realizados: {moves}</h2>
          ) : gameWon ? (
            <h2 className="gameWon">¡Ganaste! <br/>¡Felicitaciones!</h2>
          ) : (
            <>
              <div className='memo-data-game'>
                <h2 className="aciertos estadisticas">Aciertos: <span id="contador_aciertos">{successCount}</span></h2>
                <h2 className="t-restantes estadisticas">Tiempo: <span id="contador_cronometro">{time}</span> segundos</h2>
                <h2 className="movimientos estadisticas">Movimientos: <span id="contador_estadisticas">{moves}</span></h2>
              </div>
            </>
          )}
          {renderStartButton()}
        </section>
      )}
    </main>
  );
};

export default Memorama;

