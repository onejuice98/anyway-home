import { useState } from "react";
import GameHeader from "./components/GameHeader";
import GameContent from "./components/GameContent";
import { useLocation } from "react-router-dom";

const Game = () => {
  const addressLocation = useLocation();
  const { address, latLng } = addressLocation.state;

  // Map 표시 상태
  const [toggleMap, setToggleMap] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleMap((prev) => !prev);
  };
  return (
    <div className="h-screen flex flex-col justify-between gap-2 p-4">
      <GameHeader destination={address} handleOpen={handleToggle} />
      <GameContent
        mapOpen={toggleMap}
        latLng={{
          lat: Number(latLng?.documents[0].y),
          lng: Number(latLng?.documents[0].x),
        }}
      />
    </div>
  );
};

export default Game;
