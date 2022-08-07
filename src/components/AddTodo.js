
const AddTodo = ({ toDo, setTodo, handleClickBtn }) => {

  return (
    <div>
      <h1>Add new to do</h1>
      <input
        type="text"
        value={toDo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        style={{ color: "blue" }}
        type="submit"
        onClick={(event) => handleClickBtn(event)}
      >
        Submit
      </button>
    </div>
  );
};
export default AddTodo;
