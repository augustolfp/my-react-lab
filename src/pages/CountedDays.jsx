import { useThemeToggle } from "../contexts/ThemeContext";
import { useUserData } from "../services/userData";
import { DayItem } from "../components/DayItem";

export default function CountedDays() {
  const { data: userData, isFetching } = useUserData();
  const toggleTheme = useThemeToggle();

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        userData.map((day, index) => {
          return (
            <div key={index}>
              <DayItem {...day} index={index} />
            </div>
          );
        })
      )}
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </>
  );
}
