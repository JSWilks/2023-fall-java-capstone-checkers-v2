const Player2 = () => {
  /**
   * Players and turn indicator
   */
  return (
    <article>
      <div id="redWin">RED WINS!!</div>
      <div className="player" id="alien">
        <img src="./src/assets/images/tardigrade1.jpg" alt="This" />
      </div>
      <div className="stalemate">STALEMATE</div>
    </article>
  );
};

export default Player2;
