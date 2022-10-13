import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme, useThemeToggle } from "../contexts/ThemeContext";
import { useUserData } from "../services/userData";

export default function CountedDays() {
  const { data: userData, isFetching } = useUserData();
  const theme = useTheme();
  const toggleTheme = useThemeToggle();

  return (
    <>
      <Container darkTheme={theme}>
        {isFetching ? (
          <h1>Loading...</h1>
        ) : (
          userData.map((day, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>
                    <Link to={`/counted-day/${day.id}`}>Resultado {index}</Link>
                  </li>
                  <li>dayId: {day.id}</li>
                  <li>{day.day}</li>
                  <li>{day.notes}</li>
                  <li>{day.kcals} kCal</li>
                </ul>
              </div>
            );
          })
        )}
      </Container>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </>
  );
}

const Container = styled.div`
  color: ${(props) => (props.darkTheme ? "black" : "red")};
  div {
    border: solid 3px blue;
    margin: 5px;
  }
`;
