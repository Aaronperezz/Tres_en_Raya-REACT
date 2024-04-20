import { Square } from "./Square";

export function Board({ board }) {
  return (
    <secion className="game">
      {board.map((_, index) => {
        return (
          <Square Key={index} index={index}>
            {index}
          </Square>
        );
      })}
    </secion>
  );
}
