import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/api-client";
import { FETCH_DELETED_USERS } from "@/lib/endpoints";
import { getHeaders } from "@/lib/utility";

export const useDeletedUsers = (page: string) => {
  const query = useQuery({
    queryKey: [FETCH_DELETED_USERS, { page }],
    queryFn: async () => {
      const response = await client.post(
        FETCH_DELETED_USERS,
        { page },
        { ...getHeaders() }
      );

      return response.data?.data || [];
    },
  });

  return {
    ...query,
  };
};
