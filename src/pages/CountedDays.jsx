import { useThemeToggle } from "../contexts/ThemeContext";
import { useData, useDataFetchStatus } from "../contexts/DataContext";
import { DayItem } from "../components/DayItem";

export default function CountedDays() {
  const toggleTheme = useThemeToggle();
  const isFetching = useDataFetchStatus();
  const userData = useData();

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
