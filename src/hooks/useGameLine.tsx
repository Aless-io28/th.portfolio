import { useEffect, useRef, useState } from "react";

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

// const winConditionsFour = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
//   [0, 4, 8, 12],
//   [1, 5, 9, 13],
//   [2, 6, 10, 14],
//   [3, 7, 11, 15],
//   [0, 5, 10, 15],
//   [3, 6, 9, 12],
// ];

// const winConditionsFourT = [
//   [0, 1, 2],
//   [1, 2, 3],
//   [4, 5, 6],
//   [5, 6, 7],
//   [8, 9, 10],
//   [9, 10, 11],
//   [12, 13, 14],
//   [13, 14, 15],
//   [0, 4, 8],
//   [4, 8, 12],
//   [1, 5, 9],
//   [5, 9, 13],
//   [2, 6, 10],
//   [6, 10, 14],
//   [3, 7, 11],
//   [7, 11, 15],
//   [0, 5, 10],
//   [5, 10, 15],
//   [3, 6, 9],
//   [6, 9, 12],
//   [2, 5, 8],
//   [1, 6, 11],
//   [4, 9, 14],
//   [13, 10, 7],
// ];

const windConditionsFourX = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [6, 7, 8, 9],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [13, 14, 15, 16],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [19, 20, 21, 22],
  [20, 21, 22, 23],
  [0, 6, 12, 18],
  [1, 7, 13, 19],
  [2, 8, 14, 20],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [5, 11, 17, 23],
  [0, 7, 14, 21],
  [1, 8, 15, 22],
  [2, 9, 16, 23],
  [3, 8, 13, 18],
  [4, 9, 14, 19],
  [5, 10, 15, 20],
  [19, 14, 9, 4],
];

const twoGame = 24;

const useGameLine = () => {
  const [count, setCount] = useState(9);
  const countWin = count == 9 ? winConditionsThree : windConditionsFourX;
  const [cells, setCells] = useState(Array.from({ length: count }).fill(0));
  const [stateGame, setStateGame] = useState<number>(0);
  const [win, setWin] = useState("");
  const timeoutRef = useRef<number | null>(null);
  const [cellsWin, setCellsWin] = useState<number[]>([]);

  // Click cell
  const handleCellClick = (index: number) => {
    const select = cells.filter((i) => i != 0);
    if (select.length % 2 != 0 && select.length != 0) return;
    if (cells[index] != 0 || select.length == count) return;
    if (win != "") return;

    const newCells = [...cells];
    newCells[index] = select.length % 2 == 0 ? 1 : 2;
    setCells(newCells);

    // -- position bot --
    const available = () => {
      const look = count == 9 ? 1 : 2;
      const outPositions = (how: number, player: number, emp = 0) => {
        const nt = countWin.find((cond) => {
          const circlePositions = cond.filter((i) => newCells[i] === player);
          const emptyPositions = cond.filter((i) => newCells[i] === 0);
          return circlePositions.length == how && emptyPositions.length > emp;
        });
        if (nt != undefined) {
          if (emp > 0) {
            return nt;
          }
          const ntG = nt.find((i) => newCells[i] === 0);
          if (ntG != undefined) return ntG;
        }
      };

      // -- future --
      if (count > 16) {
        const post = newCells
          .map((_, i) => {
            if (newCells[i] == 1) return i;
          })
          .filter((i) => i != undefined);
        const rowsWithCircles = new Set(post.map((i) => Math.floor(i / 5)));
        if (rowsWithCircles.size < 4) {
          const block = outPositions(look + 1, 1);
          if (block != undefined) return block;
          // --
          const ft = [index - 1, index + 1];
          const randomIndex = ft[Math.floor(Math.random() * ft.length)];
          if (newCells[randomIndex] === 0) {
            return randomIndex;
          } else {
            const otherIndex = ft.find((i) => i !== randomIndex);
            if (otherIndex !== undefined && newCells[otherIndex] === 0) {
              return otherIndex;
            }
          }
        }
      }

      // -- difficult --
      if (stateGame == 1) {
        // -- win --
        const win = outPositions(look == 1 ? 2 : 3, 2);
        if (win != undefined) return win;

        // -- block --
        const block = outPositions(look + 1, 1);
        if (block != undefined) return block;
      }

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
    timeoutRef.current = setTimeout(() => {
      setCells((prevCells) => {
        const newCells = [...prevCells];
        newCells[bot] = 2;
        return newCells;
      });
    }, 500);
  };

  // Reset
  const handleReset = () => {
    setCellsWin([]);
    setCells(Array.from({ length: count }).fill(0));
    setWin("");
  };

  // Check win
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
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setCellsWin([a, b, c, d]);
          return setWin(values[0] === 1 ? "X" : "O");
        }
      }
      if (cells.filter((i) => i != 0).length === count && win === "") {
        return setWin("Empate");
      }
    };
    checkWin();
  }, [cells]);

  // Change type
  const handleType = () => {
    handleReset();
    setCount(count == 9 ? twoGame : 9);
    setCells(Array.from({ length: count == 9 ? twoGame : 9 }).fill(0));
  };

  return {
    cells,
    count,
    win,
    handleCellClick,
    handleReset,
    handleType,
    stateGame,
    setStateGame,
    cellsWin,
  };
};

export default useGameLine;

// const circlesRow = newCells
//   .map((_, i) => {
//     if (newCells[i] == 2) return i;
//   })
//   .filter((i) => i != undefined);
// const rowsWithCircles = new Set(
//   circlesRow.map((i) => Math.floor(i / 5))
// );
// console.log("Cr", rowsWithCircles);
// if (rowsWithCircles.size < 4) {
//   const ft = outPositions(1, 1, 2);
//   console.log("Wa", ft);
//   if (ft != undefined && Array.isArray(ft)) {
//     const nt = ft.filter((i) => newCells[i] == 0);
//     console.log("Nt", nt[Math.floor(Math.random() * nt.length) - 1]);
//     return nt[Math.floor(Math.random() * nt.length)];
//   }
// }
