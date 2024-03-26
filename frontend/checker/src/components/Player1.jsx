const Player1 = () => {
  /**
   * Players and turn indicator
   */
  return (
    <article>
      <div id="blueWin">BLUE WINS!!</div>
      <div className="player" id="guardian">
        <img src="./src/assets/images/DeltaGlobeOrbit.png" alt="Space Force!" />
      </div>
      <div className="stalemate">STALEMATE</div>
    </article>
  );
};

export default Player1;
