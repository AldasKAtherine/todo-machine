import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);
const [newTodoValue, setTodoNewValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange=(event)=>{
    setTodoNewValue(event.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TOTO</label>
      <textarea
      value={newTodoValue}
      onChange={onChange}
      required
      placeholder="Escribe aqui.." />
      <div className="btnContainer-TodoForm">
        <button
          onClick={onCancel}
          type="button"
          className="btnTodoForm--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="btnTodoForm--add">
          Agregar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
