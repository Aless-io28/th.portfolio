import useGameLine from "../../hooks/useGameLine";
import { IconReload } from "../icons/IconsProf";

const ThreeLine = ({ hover }: { hover: boolean }) => {
  const {
    count,
    cells,
    handleType,
    win,
    handleCellClick,
    handleReset,
    setStateGame,
    stateGame,
  } = useGameLine();

  // Drag and Drop for proyects
  return (
    <>
      <div
        className={`${
          count == 9 && "grid-cols-3 grid-rows-3 gap-2 aspect-square h-[85%]"
        } ${
          count == 16 && "grid-cols-4 grid-rows-4 gap-1 aspect-square h-[85%]"
        } ${
          count == 24 && "grid-cols-6 grid-rows-4 gap-1 aspect-auto h-[90%]"
        } grid `}
      >
        {cells.map((_, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="text-xs md:text-lg relative flex items-center justify-center aspect-square  h-full  border-[3px] rounded-md cursor-pointer select-none border-back-bor"
          >
            {cells[index] == 1 && "X"}
            {cells[index] == 2 && "O"}
            {/* <span className="absolute text-xs text-back-bor -top-[1px] left-1">
              {index}
            </span> */}
          </div>
        ))}
      </div>

      <div
        className={`${
          hover ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200 delay-300 ease-linear`}
      >
        <div className="absolute flex flex-col items-end top-[15px] right-4  gap-3 xs:right-6 md:right-12">
          <div
            className="flex items-center justify-center h-4 gap-2 p-3 border rounded-md cursor-pointer sm:p-4 w-max border-back-bor"
            onClick={handleType}
          >
            {count == 9 ? "3x" : "4x"}
          </div>
          <div
            className="flex items-center justify-center h-4 gap-2 p-3 tracking-wide border rounded-md cursor-pointer border-back-bor sm:p-4 w-max"
            onClick={() => {
              handleReset();
              setStateGame(stateGame == 0 ? 1 : 0);
            }}
          >
            <span
              className={`${
                stateGame == 0 ? "text-green-100" : "text-orange-100"
              } md:block hidden`}
            >
              {stateGame === 0 ? "Fácil " : "Difícil"}
            </span>
            <span
              className={`${
                stateGame == 0 ? "text-green-100" : "text-orange-100"
              } md:hidden block`}
            >
              {stateGame === 0 ? "F " : "D"}
            </span>
          </div>
        </div>

        <div className="absolute flex flex-col items-center justify-center h-4 gap-3 rounded-md sm:flex-row w-max bottom-9 sm:bottom-4 right-4 xs:right-6 md:right-12">
          {win && (
            <>
              <div className="hidden sm:flex">
                {win == "Empate" ? "Empate" : "Ganador " + win + ""}
              </div>
              <div className="flex sm:hidden">
                {win == "Empate" ? "Empate" : "gg " + win + ""}
              </div>
            </>
          )}
          <div
            className="p-1 ml-2 border rounded-md cursor-pointer border-back-bor"
            onClick={handleReset}
          >
            <IconReload size="16px" className="mt-[0.5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeLine;
