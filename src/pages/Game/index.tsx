import { useState } from "react";
import GameHeader from "./components/GameHeader";
import GameContent from "./components/GameContent";

// declare global {
//     interface Window {
//         kakao: any;
//     }
// }
// export {};

const Game = () => {
  const [toggleMap, setToggleMap] = useState(false);

  const clickHandler = () => {
    if (toggleMap === false) {
      setToggleMap(true);
    } else {
      setToggleMap(false);
    }
  };

  return (
    <div>
      <GameHeader handleOpen={clickHandler} />
      <GameContent mapOpen={toggleMap} />
    </div>
  );
};

export default Game;
