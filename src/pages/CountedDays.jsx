import styled from "styled-components";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme, useThemeToggle } from "../contexts/ThemeContext";

export default function CountedDays() {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery(
    "userData",
    async () => {
      const response = await axios.get("http://localhost:5000/get-days-data", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1Z3VzdG9sZnBAZ21haWwuY29tIiwibmFtZSI6IkFnb3N0aW5obyBDYXJyYXJhIiwidXNlcklkIjoxLCJpYXQiOjE2NjU2NzU2MjEsImV4cCI6MTY2NTY3OTIyMX0.PzkAQ1oam3hFB_DqRvfj12yAMZ0L7yjFEz2IRyfPkXQ",
        },
      });

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  async function handleDayCreation() {
    await queryClient.invalidateQueries(["userData"]);
  }
  return (
    <>
      <Container darkTheme={theme}>
        {isFetching ? (
          <h1>Loading...</h1>
        ) : (
          data.map((day, index) => {
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
      <DayCreator onClick={handleDayCreation}>Salve quebrada</DayCreator>
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

const DayCreator = styled.button`
  border: solid 3px red;
  margin: 5px;
`;
