import { useReducer, useState } from "react";
import styled from "styled-components";
import Todo from "../components/Todo";

const ACTIONS = {
  ADD_TODO: "add_todo",
};

function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, newTodo(action.payload.name)];
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

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return <Todo key={index}>{todo.name}</Todo>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div``;
