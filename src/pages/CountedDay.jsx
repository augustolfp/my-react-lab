import { useParams } from "react-router-dom";

export default function CountedDay() {
  const { id } = useParams();

  return <h1>Day number {id} page!</h1>;
}
