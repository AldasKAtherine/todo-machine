import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSeacrh";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import {TodoForm}  from "../TodoForm";

function AppUI() {
  const { searchedTodos, deleteTodo, completeTodo, loading, error ,
  openModal, setOpenModal} =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="container">
        <div className="divider">
          {/* <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          /> */}
          <TodoCounter />
          <TodoSearch />
        </div>
        <div className="divider">
         
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && searchedTodos.length === 0 && <EmptyTodos />}

              {searchedTodos.map((todo) => {
                return (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    onDelete={() => deleteTodo(todo.text)}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                  />
                );
              })}
            </TodoList>
          

          <CreateTodoButton setOpenModal={setOpenModal}/>
          {openModal && <Modal><TodoForm/> </Modal>}
        </div>
      </div>
    </React.Fragment>
  );
}
export { AppUI };
