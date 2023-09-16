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
  // Map 표시 상태
  const [toggleMap, setToggleMap] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleMap((prev) => !prev);
  };

  return (
    <div>
      <GameHeader handleOpen={handleToggle} />
      <GameContent mapOpen={toggleMap} />
    </div>
  );
};

export default Game;
