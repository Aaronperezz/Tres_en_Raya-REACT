export const Square = ({ children, updateboard, index }) => {
  return (
    <div className="square">
      <span className="cell_content">{index}</span>
    </div>
  );
};
