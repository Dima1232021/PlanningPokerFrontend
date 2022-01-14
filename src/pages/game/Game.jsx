import React, { useEffect } from "react";

function GamePage(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <h1>Game page</h1>
    </div>
  );
}

export default GamePage;
