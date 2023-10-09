import Button from "../../../common/button";

interface GameHeaderProps {
  destination: string;
  handleOpen: () => void;
}

const Playtime = () => {
  return (
    <div className="bg-blue-500 w-fit h-fit p-1 rounded-md text-2xl">
      00:00:00
    </div>
  );
};

const GameHeader = ({ destination, handleOpen }: GameHeaderProps) => {
  return (
    <div>
      <div className="mr-3 bg-blue-400 w-fit h-fit p-1 rounded-md text-2xl">
        도착지: {destination}
      </div>
      <div className="flex gap-2 mt-2 items-center">
        <Playtime />
        <Button color="primary" onClick={handleOpen}>
          Map
        </Button>
        <div className="animate-wiggle text-2xl">👋</div>
      </div>
    </div>
  );
};

export default GameHeader;
