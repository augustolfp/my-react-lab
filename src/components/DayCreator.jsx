import styled from "styled-components";
import { useState } from "react";
import { useAddDay } from "../services/userData";

export function DayCreator() {
  const { mutate: addDay } = useAddDay();

  const [body, setBody] = useState({
    day: "",
    notes: "",
    caloriesTarget: "",
    proteinsTarget: "",
  });

  function handleDayCreation(event) {
    event.preventDefault();
    addDay(body);
  }
  return (
    <Container>
      <form onSubmit={handleDayCreation}>
        <input
          type="text"
          name="date"
          placeholder="data"
          value={body.day}
          onChange={(e) =>
            setBody((prevBody) => ({
              ...prevBody,
              day: e.target.value,
            }))
          }
        />
        <input
          type="number"
          name="caloriesTarget"
          placeholder="Alvo de calorias"
          value={body.caloriesTarget}
          onChange={(e) =>
            setBody((prevBody) => ({
              ...prevBody,
              caloriesTarget: Number(e.target.value),
            }))
          }
        />
        <input
          type="number"
          name="proteinsTarget"
          value={body.proteinsTarget}
          placeholder="Alvo de proteinas"
          onChange={(e) =>
            setBody((prevBody) => ({
              ...prevBody,
              proteinsTarget: Number(e.target.value),
            }))
          }
        />
        <textarea
          name="notes"
          value={body.notes}
          placeholder="Anotações"
          onChange={(e) =>
            setBody((prevBody) => ({
              ...prevBody,
              notes: e.target.value,
            }))
          }
        />
        <button type="submit">CRIAR</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => (props.darkTheme ? "black" : "red")};
  border: solid 3px pink;
  margin: 5px;
`;
