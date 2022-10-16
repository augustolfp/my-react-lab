import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from "../../lib/axios";
const token = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1Z3VzdG9sZnBAZ21haWwuY29tIiwibmFtZSI6IkFnb3N0aW5obyBDYXJyYXJhIiwidXNlcklkIjoxLCJpYXQiOjE2NjU5NDE2MDcsImV4cCI6MTY2NTk0NTIwN30.-aWoOoiFnxObCllTVw7B-4FJ5iL6RWp5qchJnI4i0CI",
  },
};

function addDay(dayBody) {
  return api.post("/add-counted-day", dayBody, token);
}

export function useUserData() {
  return useQuery(
    "useUserData",
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
