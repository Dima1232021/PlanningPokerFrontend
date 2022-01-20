import React from "react";

export default function FormMenu() {
  return (
    <div className="form-game__row">
      <div className="form-game__menu">
        <button
        //   onClick={startPull}

        //   disabled={game.poll || checkAnswer || !stories.length}
        >
          Start Poll
        </button>

        <button

        //   onClick={flipCards}
        //   disabled={!game.poll}
        >
          Flip Cards
        </button>

        <button

        //   onClick={resetCards}
        //   disabled={game.poll || !checkAnswer}
        >
          Reset Cards
        </button>
      </div>
    </div>
  );
}
