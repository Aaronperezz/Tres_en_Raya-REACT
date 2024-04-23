import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardtocheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardtocheck[a] &&
      boardtocheck[a] === boardtocheck[b] &&
      boardtocheck[a] === boardtocheck[c]
    ) {
      return boardtocheck[a];
    }
  }
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
