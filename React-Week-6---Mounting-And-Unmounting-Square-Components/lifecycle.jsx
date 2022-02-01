const Square = ({ takeTurn, id }) => {
  const mark = ["O", "X", "+"];
  const [filled, setFilled] = React.useState(false);
  const [tik, setTik] = React.useState(2);

  
  const [mounted, setMounted] = React.useState(true);
  var toggle = () => setMounted(!mounted);

  if (mounted === false) {
    return null;
  } else {
return (
  
  <button
    id={`square-button-${id}`}
    onClick={() => {
      setTik(takeTurn(id));
      setFilled(true);
      toggle();
    }}
  >
    <h1>{mark[tik]}</h1>
  </button>
);
  }

  
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [gameState, setGameState] = React.useState([]);
  
  var toggle = () => setMounted(!mounted);

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  function renderSquare(i) {
    return <Square takeTurn={takeTurn} id={i} ></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <h1>{status}</h1>
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
