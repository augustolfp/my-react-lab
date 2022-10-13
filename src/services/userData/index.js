import { useQuery } from "react-query";
import { createUseUserKey } from "./keys";
import api from "../api";
import { token } from "./token";

export function useUserData() {
  return useQuery(
    createUseUserKey(),
    async () => {
      const response = await api.get("/get-days-data", token);

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );
}
