import styled from "styled-components";

export default function Todo(props) {
  return (
    <>
      <Container complete={props.complete}>
        {props.name}
        <button onClick={() => props.toggle(props.id)}>Toggle</button>
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      </Container>
      <div style={{ color: props.complete ? "black" : "red" }}>opa</div>
    </>
  );
}

const Container = styled.div`
  display: flex;
  border: solid 2px black;
  margin: 4px;
  padding: 4px;
  color: ${(props) => (props.complete ? "blue" : "red")};
`;
