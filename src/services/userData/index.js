import { useQuery, useMutation, useQueryClient } from "react-query";
import { createUseUserDataKey } from "./keys";
import api from "../api";
import { token } from "./token";

function addDay(dayBody) {
  return api.post("/add-counted-day", dayBody, token);
}

export function useUserData() {
  return useQuery(
    createUseUserDataKey(),
    async () => {
      const response = await api.get("/get-days-data", token);

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );
}

export function useAddDay() {
  const queryClient = useQueryClient();
  return useMutation(addDay, {
    onSuccess: () => {
      queryClient.invalidateQueries("useUserData");
    },
  });
}
