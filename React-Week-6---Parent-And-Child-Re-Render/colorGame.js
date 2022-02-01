// notice properties takeTurn and id are being passed in
const Square = ({ takeTurn, id, player }) => {
  console.log('Square re-rendering now.');
  const palet = ["blue", "red", "green"];
  const [color, setColor] = React.useState(2);
  const innerTakeTurn = (id) => {
    return ((player + 1) % 2);
  };

  return (
    <button
      id={id}
      onClick={(e) => {
        setColor(takeTurn(id));
        e.preventDefault();
        e.target.style.background = palet[color];
      }}
    ></button>
  );
};

const Board = () => {
  // 1st player is 1
  // State keeps track of next player
  const [player, setPlayer] = React.useState(1);
  console.log('Board re-rendering now.');

  // check for winner
  let status = `Player ${player}`;
  console.log(`Status Player ${status}`);

  const takeTurn = (id) => {
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  function renderSquare(i, color) {
    return <Square takeTurn={takeTurn} id={i} player={player}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
        <button onClick={() => takeTurn()}> Change Player</button>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Board></Board>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
