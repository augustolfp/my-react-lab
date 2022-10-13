import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQueryClient } from "react-query";

export default function CountedDays() {
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
      <Container>
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
    </>
  );
}

const Container = styled.div`
  div {
    border: solid 3px blue;
    margin: 5px;
  }
`;

const DayCreator = styled.button`
  border: solid 3px red;
  margin: 5px;
`;
