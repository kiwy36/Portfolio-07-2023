import { useState, useEffect } from 'react';
import './BattleGame.css';
import Swal from 'sweetalert2';


const BattleGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [gameOver, setGameOver] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [computerSelectedCards, setComputerSelectedCards] = useState([]);
  const [showRules, setShowRules] = useState(true);
  const [playerSelectedDino, setPlayerSelectedDino] = useState(null);
  const [computerSelectedDino, setComputerSelectedDino] = useState(null);


  const rules = [
    { id: 1, rule: 'Regla uno', details: 'Cada turno, Cada jugador elije un dinosaurio.' },
    { id: 2, rule: 'Regla dos', details: 'Solo se puede elegir una vez cada dinosaurio por juego.'},
    { id: 3, rule: 'Regla tres', details: 'Se compara los ataques de los dinos que se enfrentan.' },
    { id: 4, rule: 'Regla cuatro', details: 'Se compara el ataque más alto con la defensa de la carta con ataque mas bajo para obtener los puntos del ganador.' },
    { id: 5, rule: 'Regla cinco', details: 'Los puntos pueden ser negativos y restan del total de puntos.' },
    { id: 6, rule: 'Regla seis', details: 'Si dos dinos tienen el mismo ataque se declara empate' },
    { id: 7, rule: 'Regla siete', details: 'Gana el jugador con mas puntos.' }
  ];
  const choices = [
    { id: 'abc123', name: 'MOSASAURUS', atk: 4, def: 2, image: 'https://i.ibb.co/Vt8ymRt/dino-00.jpg' },
    { id: 'def456', name: 'ALLOSAURUS', atk: 3, def: 2, image: 'https://i.ibb.co/0BPY8j1/dino-03.jpg' },
    { id: 'ghi789', name: 'VELOCIRAPTORCITO', atk: 2, def: 2, image: 'https://i.ibb.co/52D1jNj/dino-04.jpg' },
    { id: 'jkl012', name: 'ATROCIRAPTOR', atk: 2, def: 3, image: 'https://i.ibb.co/nCJWkFn/dino-06.jpg' },
    { id: 'mno345', name: 'PYRORAPTOR', atk: 2, def: 4, image: 'https://i.ibb.co/9TDpp5H/dino-07.jpg' },
    { id: 'pqr678', name: 'TRICERATOPS', atk: 3, def: 3, image: 'https://i.ibb.co/nw97v1C/dino-02.jpg' },
    { id: 'stu901', name: 'SAURÓPODO', atk: 1, def: 4, image: 'https://i.ibb.co/4wyV7yZ/dino-05.jpg' },
    { id: 'vwx234', name: 'VELOCIRAPTOR', atk: 3, def: 2, image: 'https://i.ibb.co/LJVSrGC/dino-01.jpg' },
    { id: 'yz0123', name: 'TIRANOSSAURO', atk: 4, def: 2, image: 'https://i.ibb.co/TqQF1kk/dino-09.jpg' },
    { id: '456abc', name: 'THERIZINOSAURUS', atk: 2, def: 4, image: 'https://i.ibb.co/JpLP4cb/dino-08.jpg' },
    { id: '789def', name: 'OVIRAPTOR', atk: 2, def: 2, image: 'https://i.ibb.co/sKnyTtn/dino-11.jpg' },
    { id: '012ghi', name: 'MICRORAPTOR', atk: 2, def: 4, image: 'https://i.ibb.co/bQ9n3J7/dino-12.jpg' }
  ];
  useEffect(() => {
    if (round > 0) {
      playRound();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round]);
  const playRound = () => {
    if (round <= 6) {
      const computerHand = computerCards.filter(choice => !computerSelectedCards.includes(choice.name));
      const computerChoiceIndex = Math.floor(Math.random() * computerHand.length);
      const computerSelectedChoice = computerHand[computerChoiceIndex];
      setComputerChoice(computerSelectedChoice.name);
      setComputerSelectedCards([...computerSelectedCards, computerSelectedChoice.name]);
      const playerChoiceObj = choices.find(choice => choice.name === playerChoice && playerChoice !== null);
      const playerPoints = playerChoiceObj.atk - computerSelectedChoice.def;
      const computerPoints = computerSelectedChoice.atk - playerChoiceObj.def;

      setComputerSelectedDino(computerSelectedChoice)
      setPlayerSelectedDino(playerChoiceObj);

      if (playerChoiceObj.atk > computerSelectedChoice.atk) {
        if (playerPoints > 0) {
          setResult(`Tu ganas este round! Player: ${playerPoints} puntos`);
          setPlayerScore(playerScore + playerPoints);
        } else if (playerPoints < 0) {
          setResult(`La computadora gano es round! Player: ${playerPoints} puntos`);
          setPlayerScore(playerScore + playerPoints);
        } else {
          setResult("Esto fue un empate!");
        }
      } else if (playerChoiceObj.atk < computerSelectedChoice.atk) {
        if (computerPoints > 0) {
          setResult(`La computadora gano este round! Computadora: ${computerPoints} puntos`);
          setComputerScore(computerScore + computerPoints);
        } else if (computerPoints < 0) {
          setResult(`Player gano este round! Computadora: ${computerPoints} puntos`);
          setComputerScore(computerScore + computerPoints);
        } else {
          setResult("Esto fue un empate!");
        }
      } else {
        setResult("Esto fue un empate!");
      }
      checkGameOver();
    }
  };
  const checkGameOver = () => {
    if (round === 6) {
      let gameResult = '';
      if (playerScore > computerScore) {
        gameResult = 'Muy bien! tu ganaste el dino duelo!';
      } else if (computerScore > playerScore) {
        gameResult = 'La Computadora gana el dino duelo!';
      } else if (computerScore === playerScore && playerScore === computerScore) {
        gameResult = "Empataron el dino duelo!";
      } else {
        gameResult = "Empataron el dino duelo!";
      }
      setResult(gameResult);
      setGameOver(true);
      Swal.fire({
        title: 'El juego terminó',
        text: `${gameResult}, revisa el contador para ver los puntos.`,
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  };
  const startGame = () => {
    const shuffledChoices = shuffleArray(choices);
    const playerHand = shuffledChoices.slice(0, 6);
    const computerHand = shuffledChoices.slice(6, 12);
    setPlayerCards(playerHand);
    setComputerCards(computerHand);
    setGameStarted(true);
    setGameOver(false);
  };
  const resetGame = () => {
    const shuffledChoices = shuffleArray(choices);
    const playerHand = shuffledChoices.slice(0, 6);
    const computerHand = shuffledChoices.slice(6, 12);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
    setRound(0);
    setSelectedCards([]);
    setComputerSelectedCards([]);
    setPlayerCards(playerHand);
    setComputerCards(computerHand);
  };
  const handleChoice = (choice) => {
    if (round === 0) {
      setPlayerScore(0);
      setComputerScore(0);
    }
    if (selectedCards.includes(choice)) {
      return;
    }
    setSelectedCards([...selectedCards, choice]);
    setPlayerChoice(choice);
    setRound(round + 1);
  };
  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  return (
    <section id="inicio" className="batlegame">
      <div className="contenido-seccion">
        <h1 className='titulo'>Dino Duelo</h1>
        {showRules && (
          <div className="reglas">
            <h2>Reglas del juego:</h2>
            <ul>
              {rules.map((rule) => (
                <li key={rule.id}>
                  <strong>{rule.rule}:</strong> {rule.details}
                </li>
              ))}
            </ul>
          </div>
        )}
        {!gameStarted && (
          <button className="iniciar-juego"  onClick={() => { startGame(); setShowRules(false); }}>
            Iniciar Juego
          </button>
        )}
        {gameStarted && (
          <div className='contenedor-jugadores'>
            <div className="jugador">
              <h1>Player</h1>
              <div className="cartaDino">
                {playerCards.map((choice) => (
                  <button key={choice.name} onClick={() => handleChoice(choice.name)} disabled={selectedCards.includes(choice.name)}>
                    <img src={choice.image} alt={choice.name} />
                    <div className='data-card'>
                      <p>{choice.name}</p>
                      <p>ATK: {choice.atk} DEF: {choice.def}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="computadora">
              <h1>Computadora</h1>
              <div className="cartaDino">
                {computerCards.map((choice) => (
                  <button key={choice.name}
                  disabled={selectedCards.includes(choice.name) || computerSelectedCards.includes(choice.name)}>
                    <img src={choice.image} alt={choice.name} />
                    <div  className='data-card'>
                      <p>{choice.name}</p>
                      <p>ATK: {choice.atk} DEF: {choice.def}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className='contenedor-infoGame'>
              <div>
                <div className="contador-juego">
                  <h2>Player Score: {playerScore}</h2>
                  <h2>Computer Score: {computerScore}</h2>
                  <h2>Round: {round}</h2>
                  <h2>{result}</h2>
                </div>
                {playerSelectedDino && computerSelectedDino && (
                  <div className="dinos-info">
                    <h2>Player uso el Dino: {playerSelectedDino.name} (ATK: {playerSelectedDino.atk}, DEF: {playerSelectedDino.def})</h2>
                    <h2>Computadora uso el Dino: {computerSelectedDino.name} (ATK: {computerSelectedDino.atk}, DEF: {computerSelectedDino.def})</h2>
                  </div>
                )}
              </div>
                <button className="reiniciar-juego" onClick={resetGame}>
                  Reiniciar Juego
                </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BattleGame;



