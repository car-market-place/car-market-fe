import { apiClient } from "../client/axios";

export interface Listing {
  id: string;
  title: string;
  price: number;
}

export const listingApi = {
  getList(params?: any) {
    return apiClient
      .get<Listing[]>("/listings", {
        params,
      })
      .then((res) => res.data);
  },

  create(data: any) {
    return apiClient.post("/listings", data).then((res) => res.data);
  },
};
