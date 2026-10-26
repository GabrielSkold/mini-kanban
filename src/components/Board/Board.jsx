const Board = ({ tasks }) => {
  return (
    <>
      <h1>Board</h1>
      <p>Amount of tasks: {tasks.length}</p>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ol>
    </>
  );
};

export default Board;
