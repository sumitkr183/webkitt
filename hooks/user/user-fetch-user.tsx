import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/api-client";
import { getHeaders } from "@/lib/utility";
import { FETCH_USERS } from "@/lib/endpoints";

export const useFetchUser = (page = "1") => {
  const query = useQuery({
    queryKey: [FETCH_USERS, { page }],
    queryFn: async () => {
      const response = await client.post(
        FETCH_USERS,
        {
          page,
          created_from: "",
          created_to: "",
        },
        { ...getHeaders() }
      );

      return response.data?.data || [];
    },
  });

  return {
    ...query,
  };
};
