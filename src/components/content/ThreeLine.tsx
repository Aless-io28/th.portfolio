import { useEffect, useState } from "react";
import { IconReload } from "../icons/IconsProf";

const winConditionsThree = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winConditionsFour = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

// const windConditionsFourX = [
//   [0, 1, 2, 3],
//   [1, 2, 3, 4],
//   [2, 3, 4, 5],
//   [6, 7, 8, 9],
//   [7, 8, 9, 10],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
//   [13, 14, 15, 16],
//   [14, 15, 16, 17],
//   [18, 19, 20, 21],
//   [19, 20, 21, 22],
//   [20, 21, 22, 23],
//   [0, 6, 12, 18],
//   [1, 7, 13, 19],
//   [2, 8, 14, 20],
//   [3, 9, 15, 21],
//   [4, 10, 16, 22],
//   [5, 11, 17, 23],
//   [0, 7, 14, 21],
//   [1, 8, 15, 22],
//   [2, 9, 16, 23],
//   [3, 6, 9, 12],
//   [4, 7, 10, 13],
//   [5, 8, 11, 14],
// ];

const ThreeLine = () => {
  const [count, setCount] = useState(9);
  const countWin = count == 9 ? winConditionsThree : winConditionsFour;
  const [cells, setCells] = useState(Array.from({ length: count }).fill(0));
  const [win, setWin] = useState("");

  const handleCellClick = (index: number) => {
    const select = cells.filter((i) => i != 0);
    if (select.length % 2 != 0 && select.length != 0) return;
    if (cells[index] != 0 || select.length == count) return;
    if (win != "") return;

    const newCells = [...cells];
    newCells[index] = select.length % 2 == 0 ? 1 : 2;
    setCells(newCells);

    const available = () => {
      const look = count == 9 ? 1 : 2;
      const outPositions = (how: number, player: number, emp = 0) => {
        const nt = countWin.find((cond) => {
          const circlePositions = cond.filter((i) => newCells[i] === player);
          const emptyPositions = cond.filter((i) => newCells[i] === 0);
          return circlePositions.length == how && emptyPositions.length > emp;
        });
        if (nt != undefined) {
          // if (emp > 0) {
          //   return nt;
          // }
          const ntG = nt.find((i) => newCells[i] === 0);
          if (ntG != undefined) return ntG;
        }
      };

      // -- future --
      // if (count > 16 && cells.filter((i) => i == 2).length < 2) {
      //   const ft = outPositions(1, 1, 2);
      //   console.log(ft);
      //   if (ft != undefined && Array.isArray(ft)) {
      //     const nt = ft.filter((i) => newCells[i] == 0);
      //     return nt[Math.floor(Math.random() * nt.length)];
      //   }
      // }

      // -- win --
      const win = outPositions(look == 1 ? 2 : 3, 2);
      if (win != undefined) return win;

      // -- block --
      const block = outPositions(look + 1, 1);
      if (block != undefined) return block;

      // -- goal --
      const goal = outPositions(look, 2);
      if (goal != undefined) return goal;

      // -- contra random --
      const vIndex = [
        0,
        3,
        index - 1,
        index + 1,
        index - 2,
        index + 2,
        index - 4,
        index + 4,
        12,
        cells.length - 1,
      ];
      const verify = vIndex.filter((i) => {
        if (i != index) return cells[i] == 0;
      });
      const rv = Math.floor(Math.random() * verify.length);
      if (verify.length != 0 && rv > vIndex.length) return verify[rv];

      // -- simple random --
      const emptyIndices = newCells
        .map((value, index) => (value === 0 ? index : -1))
        .filter((index) => index !== -1);
      if (emptyIndices.length === 0) return -1;
      const randomIndex = Math.floor(Math.random() * emptyIndices.length);
      return emptyIndices[randomIndex];
    };

    const bot = available();
    if (bot == -1 || Array.isArray(bot)) return;
    setTimeout(() => {
      setCells((prevCells) => {
        const newCells = [...prevCells];
        newCells[bot] = 2;
        return newCells;
      });
    }, 500);
  };

  const handleReset = () => {
    setCells(Array.from({ length: count }).fill(0));
    setWin("");
  };

  useEffect(() => {
    const checkWin = () => {
      for (const condition of countWin) {
        const [a, b, c, d] = condition;
        const values = [cells[a], cells[b], cells[c], cells[d]];
        if (
          values.every(
            (v, i) =>
              v !== 0 &&
              (v === values[0] || (i === 3 && values[3] === undefined))
          )
        ) {
          return setWin(values[0] === 1 ? "X" : "O");
        }
      }
      if (cells.filter((i) => i != 0).length === count && win === "") {
        return setWin("Empate");
      }
    };
    checkWin();
  }, [cells, win]);

  const handleType = () => {
    handleReset();
    setCount(count == 9 ? 16 : 9);
    setCells(Array.from({ length: count == 9 ? 16 : 9 }).fill(0));
  };

  // CORREGIR PARA EL 4x6 para el FUTURE, AGREGAR DIFICULTAD
  // PARAR EL JUEGO CUANDO GANE LA X, EL CIRCULO YA NO DEBE COLOCARSE
  //  TAMBIEN HACER QUE COMIENCE O NO EL O
  return (
    <>
      <div
        className={`${count == 9 && "grid-cols-3 grid-rows-3 gap-3"} ${
          count == 16 && "grid-cols-4 grid-rows-4 gap-1"
        } ${
          count == 24 && "grid-cols-6 grid-rows-4 gap-1"
        } grid  h-[85%] aspect-square`}
      >
        {cells.map((_, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="flex items-center justify-center w-full h-full p-4 border-[3px] rounded-lg cursor-pointer select-none border-back-bor"
          >
            {cells[index] == 1 && "X"}
            {cells[index] == 2 && "O"}
          </div>
        ))}
      </div>

      <div className="absolute flex flex-col items-center justify-center h-4 gap-2 rounded-lg xs:flex-row w-max bottom-9 xs:bottom-4 right-4 xs:right-6 md:right-12">
        {win && (
          <>
            <div className="hidden xs:flex">
              {win == "Empate" ? "Empate" : "Ganador " + win + ""}
            </div>
            <div className="flex xs:hidden">
              {win == "Empate" ? "Empate" : "GG " + win + ""}
            </div>
          </>
        )}
        <div
          className="p-1 ml-2 border rounded-lg cursor-pointer border-back-bor"
          onClick={handleReset}
        >
          <IconReload size="18px" className="mt-[1px]" />
        </div>
      </div>

      <div
        className="absolute flex items-center justify-center h-4 gap-2 p-4 border rounded-lg cursor-pointer w-max top-4 right-4 xs:right-6 md:right-12 border-back-bor"
        onClick={handleType}
      >
        {count == 9 ? "3x" : "4x"}
      </div>
    </>
  );
};

export default ThreeLine;
