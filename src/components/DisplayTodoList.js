const DisplayTodoList = ({ childrenData, deleteTodoInParent }) => {
  const handleDeleteList = (id) => {
    console.log("id in children", id);
    deleteTodoInParent(id);
  };

  return (
    <div>
      {console.log("childrenData", childrenData)}

      {childrenData.map((item) => {
        return (
          <h2 key={item.id} onClick={() => handleDeleteList(item.id)}>
            {item.name}
          </h2>
        );
      })}
    </div>
  );
};

export default DisplayTodoList;
