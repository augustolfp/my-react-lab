import { createContext, useContext } from "react";
import { useUserData } from "../services/userData";

const DataContext = createContext();
const DataContextStatus = createContext();

export function useData() {
  return useContext(DataContext);
}

export function useDataFetchStatus() {
  return useContext(DataContextStatus);
}

export function DataProvider(props) {
  const { data: userData, isFetching } = useUserData();

  return (
    <DataContextStatus.Provider value={isFetching}>
      <DataContext.Provider value={userData}>
        {props.children}
      </DataContext.Provider>
    </DataContextStatus.Provider>
  );
}
