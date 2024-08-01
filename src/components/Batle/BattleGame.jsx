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
    { id: 'abc123', name: 'MOSASAURUS', atk: 4, def: 2, image: 'https://lh3.googleusercontent.com/pw/AP1GczNPJSS0lwW2Uj_Ehr7SpGH59c0VkVH30S6E9rtMaB-VltOM6c21WjQvK936yuPPRFofY6ZWrsznuPWr7nDSU0npngBOR6evAg3uzL_ChUjhl-_Fgljc5TjN4DJxL6dtQ0iQ2NGxjXK0y8cQaZJzm9WPtg=w348-h618-s-no?authuser=0' },
    { id: 'def456', name: 'ALLOSAURUS', atk: 3, def: 2, image: 'https://lh3.googleusercontent.com/pw/AP1GczOXqiblXXpaSkmDNt5AzaInpy4P5OJceVgtKzx7rjbWmHAYGbW0YNIAe7Jh_VBDce4hBRYOvI_dbaqmH8uIWdmeemRN-jaFH_6BD3D6CRZ6EK9WmS6nbl4NhP9Vt9BYM5lnjo1QMiXjpJ-CuDodqPML-w=w309-h618-s-no?authuser=0' },
    { id: 'ghi789', name: 'VELOCIRAPTORCITO', atk: 2, def: 2, image: 'https://lh3.googleusercontent.com/pw/AP1GczO8uNg7ahEvzN239TUge66qanr6-qLwxDthMCiS5KpSmIu1unrrELuE189aMLSAavNBQ3prULq30-DpHKT4DjWaqkxVEwmEmhhpn7s9Cp5MpyxxqObe0uqlU7lbmgPV7BNI0dHBGz8sQAeHQS6NJOCeEQ=w413-h618-s-no?authuser=0' },
    { id: 'jkl012', name: 'ATROCIRAPTOR', atk: 2, def: 3, image: 'https://lh3.googleusercontent.com/pw/AP1GczO2zRM8lJeqHiVaVBUG4g4-45Y2J4UxqVGT9tVwWVmnkhrh6Gkez1wKqqhaPBtOAOTZiTjJyXVhCIBm6CGi0ayzyU0O0w75mvLU2eFVFWUynGMFulEIjpfw5JK8_DZdSpX4ZWjjNxVoa8ytNe_VHzCaZA=w348-h618-s-no?authuser=0' },
    { id: 'mno345', name: 'PYRORAPTOR', atk: 2, def: 4, image: 'https://lh3.googleusercontent.com/pw/AP1GczMt_dDeXv7kOcmIucF132Hezxe41efE-zd5lY4R202HELeGT-mHYaF2AGoGp5r23PwpJVic4Q2VGR5n-SodGU_iTUPQeXF1OMp-epzsKEzjRKrbrD18hkQOTLrWJxm52Y6Rn4PsqsaHyviRl2scwRtY5g=w347-h618-s-no?authuser=0' },
    { id: 'pqr678', name: 'TRICERATOPS', atk: 3, def: 3, image: 'https://lh3.googleusercontent.com/pw/AP1GczM2JwghpPDJfnEiCzlbqMdb09j-Eh9f4ekfofyqgUGRUJEYqhicTiUFG_k2_rgB-MM0cJp3zAjolpLYUG7mA9jJfD48-IaiV9AgFPV1xBjgERZrtSevl_80UHChWBrGSQSREa8R1ciYBnl01Hb1kXUAUw=w348-h618-s-no?authuser=0' },
    { id: 'stu901', name: 'SAURÓPODO', atk: 1, def: 4, image: 'https://lh3.googleusercontent.com/pw/AP1GczMwfx8Ia3l7xdfpnZuK6TVCuZ89K4MZ1c0lSa_FYAfUvjuibxHq36VnXXTK4CQoEFlqQqxJG_Dot55iacemnLJWaxOa4jUkJ_nrx9cOtGcAO3nlR5JW58oyI03XbZKYBHGIV2Nrn_vfSpsKbvnDgGyi3Q=w406-h618-s-no?authuser=0' },
    { id: 'vwx234', name: 'VELOCIRAPTOR', atk: 3, def: 2, image: 'https://lh3.googleusercontent.com/pw/AP1GczMOU5FMUBDV_YeIEMQIsKMLzp6QG7rEf270zYNDzjGV8c53HzDzs2PGBkkvpxhMgrDCX9QXL5wfwepg29ES5lQ9RKYgMW45d-P-JDEcVcptifas_BXW9CYYhEa6uRo9hXVsBAm9zYT9Ctp3M9fMs-JtYw=w349-h618-s-no?authuser=0' },
    { id: 'yz0123', name: 'TIRANOSSAURO', atk: 4, def: 2, image: 'https://lh3.googleusercontent.com/pw/AP1GczOTMOYMSKFl0rs_D8CIoVVC85wxVaHdBj32B6W1kVw8AJnWg-ovoBSBXmlbOOBuGV5jZ6bOdZwE1tLFRROjDt5apwlBJ4fLIEDoteCDDTeA5_A4jx6P9cDjXIUHT-ADf4-JmuQATk0r-k9KQlWZKsv2VA=w348-h618-s-no?authuser=0' },
    { id: '456abc', name: 'THERIZINOSAURUS', atk: 2, def: 4, image: 'https://lh3.googleusercontent.com/pw/AP1GczNc0dzMZ6QbxtlDWmfXmOVrLs2dRj4h4glxJE0-K_wcnXrJX9SOQR90JYH_3o8RHl6rIdz3f3XlRrC6pr8uYVMh2JLJGwI1wBYMU7GeuEswFFqALdMMoagTlppDRj_fPrDa8IMJ6wA6jtEQlhpZ_pug0Q=w347-h618-s-no?authuser=0' },
    { id: '789def', name: 'OVIRAPTOR', atk: 2, def: 2, image: 'https://lh3.googleusercontent.com/pw/AP1GczM3MytyH9OZEYw1bA2Kd8MwLTymj1OBadkbOwUDuUNZv3ZY2yYKG29YSAKiD0TTolai2sLEcDIIPpl2RsxVNmDr0X-s72_oB9ytY1LWaJPT_VhE5Jrj6vUs_Q3VNS22PcJgV8pjdjMon7N4gI-qKsWRvg=w453-h618-s-no?authuser=0' },
    { id: '012ghi', name: 'MICRORAPTOR', atk: 2, def: 4, image: 'https://lh3.googleusercontent.com/pw/AP1GczMAc1q3sQVhqaqCq6p2mzEdGxi44W0hC8wnC2lJtJq4t1e5xQKiujO_joO6GeZymjblYF26vzLaU8n6cxhiN0HqJhrc4KB884KSsAo1Y6y7MDtU08UnkXSOj_diyfatG9Ugkn3imMaeOux46PoMomuwNw=w376-h618-s-no?authuser=0' }
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



