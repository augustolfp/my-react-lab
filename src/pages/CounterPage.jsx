import { useReducer } from "react";
import styled from "styled-components";

const ACTIONS = {
  INCREMENT: "increment",
  DECEREMENT: "decrement",
};

function reducer(state, action) {
  if (action.type === ACTIONS.INCREMENT) {
    return { count: state.count + 1 };
  }

  if (action.type === ACTIONS.DECEREMENT) {
    return { count: state.count - 1 };
  }

  return state;
}

export default function CounterPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECEREMENT });
  }

  return (
    <Container>
      <h1>CONTAGEM: {state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </Container>
  );
}

const Container = styled.div`
  h1,
  button {
    font-size: 26px;
    font-weight: bold;
    margin: 20px;
  }
`;
