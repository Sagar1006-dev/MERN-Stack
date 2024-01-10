import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // State to manage the text for updating a todo
  const [updateText, setUpdateText] = useState("");
  // State to track the id of the todo being updated
  const [updatingTodoId, setUpdatingTodoId] = useState(null);

  const handleUpdateClick = (id, text) => {
    setUpdateText(text);
    setUpdatingTodoId(id);
  };

  const handleUpdateTodo = () => {
    if (updatingTodoId !== null) {
      dispatch(updateTodo({ id: updatingTodoId, newText: updateText }));
      // Reset states after updating
      setUpdateText("");
      setUpdatingTodoId(null);
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Display the todo text or an input for updating */}
            {updatingTodoId === todo.id ? (
              <input
                type="text"
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
                className="text-white bg-transparent border-none focus:outline-none"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div>
              {/* Button to trigger the update */}
              {updatingTodoId === todo.id ? (
                <button
                  onClick={handleUpdateTodo}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Update
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleUpdateClick(todo.id, todo.text)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
                  >
                    Edit
                  </button>

                  {/* Button to remove the todo */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
