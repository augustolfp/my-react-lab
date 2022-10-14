import styled from "styled-components";

export default function Todo(props) {
  return (
    <Container complete={props.complete}>
      {props.children}
      <button>Toggle</button>
      <button>Delete</button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  border: solid 2px black;
  margin: 4px;
  padding: 4px;
  color: ${(props) => (props.complete ? "blue" : "red")};
`;
