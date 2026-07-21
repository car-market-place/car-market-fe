import { listingApi } from "../modules";
import { useApiMutation } from "../query/use-api-mutation";

export function useCreateListing() {
  return useApiMutation({
    mutationFn: listingApi.create,
  });
}
