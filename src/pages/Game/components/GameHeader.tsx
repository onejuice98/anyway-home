import { useLocation } from "react-router-dom";
import AmtButton from "../../../common/AmtButton";

interface GameHeaderProps {
  handleOpen: () => void;
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

const GameHeader = ({ handleOpen }: GameHeaderProps) => {
  return (
    <div>
      <AddressToGo />
      <div className="flex gap-2 mt-2 items-center">
        <Playtime />
        <AmtButton color="primary" onClick={handleOpen}>
          Map
        </AmtButton>
        <div className="animate-wiggle text-2xl">👋</div>
      </div>
    </div>
  );
};

export default GameHeader;
