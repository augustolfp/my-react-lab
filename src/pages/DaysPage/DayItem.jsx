import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export function DayItem(props) {
  const theme = useTheme();

  return (
    <Container darkTheme={theme}>
      <ul>
        <li>
          <Link to={`/counted-day/${props.id}`}>Resultado {props.index}</Link>
        </li>
        <li>dayId: {props.id}</li>
        <li>{props.day}</li>
        <li>{props.notes}</li>
        <li>{props.kcals} kCal</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => (props.darkTheme ? "black" : "red")};
  border: solid 3px blue;
  margin: 5px;
`;
