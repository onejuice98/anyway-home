import { useLocation } from "react-router-dom";

interface GameHeaderProps {
  handleOpen: () => void;
}
interface ButtonToggleMapProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddressToGo = () => {
  const addressLocation = useLocation();
  const address = addressLocation.state.address;

  return (
    <div className="mr-3 bg-blue-400 w-fit h-fit p-1 rounded-md text-2xl">
      도착지: {address}
    </div>
  );
};

const Playtime = () => {
  return (
    <div className="bg-blue-500 w-fit h-fit p-1 rounded-md text-2xl">
      00:00:00
    </div>
  );
};

const ButtonToggleMap = ({ onClick }: ButtonToggleMapProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-300 hover:bg-orange-400 w-fit h-fit p-1 rounded-md text-2xl"
    >
      map
    </button>
  );
};

const GameHeader = ({ handleOpen }: GameHeaderProps) => {
  return (
    <div>
      <AddressToGo />
      <div className="flex gap-2 mt-2">
        <Playtime />
        <ButtonToggleMap onClick={handleOpen} />
      </div>
    </div>
  );
};

export default GameHeader;
