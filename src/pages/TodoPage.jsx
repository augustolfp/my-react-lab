import { useReducer, useState } from "react";
import styled from "styled-components";
import Todo from "../components/Todo";

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, newTodo(action.payload.name)];
  }

  if (action.type === ACTIONS.TOGGLE_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }

  if (action.type === ACTIONS.DELETE_TODO) {
    return todos.filter((todo) => {
      return todo.id !== action.payload.id;
    });
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function TodoPage() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  function handleToggle(id) {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } });
  }

  function handleDelete(id) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return (
          <Todo
            toggle={handleToggle}
            handleDelete={handleDelete}
            key={todo.id}
            {...todo}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div``;
