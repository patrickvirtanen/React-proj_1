function Application(props) {
  return (
    <div>
      <div className="scoreboard">
        <div className="header">
          <h1>{props.title}</h1>
        </div>

        <div className="players"></div>

          <div className="player">
            <div ClassName="player-name">
              Patrick Virtanen
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
              <div className="counter-score">31</div>
              <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>

          <div className="player">
            <div ClassName="player-name">
              Tanja Pitkänen
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
              <div className="counter-score">11</div>
              <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>

          <div className="player">
            <div ClassName="player-name">
              Nadja Enegren
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
              <div className="counter-score">61</div>
              <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>


          <div className="player">
            <div ClassName="player-name">
              Nadja Enegren
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
              <div className="counter-score">61</div>
              <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

ReactDOM.render(<Application title="My scoreboard" />, document.getElementById('container'));
