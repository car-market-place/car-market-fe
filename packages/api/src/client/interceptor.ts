import { apiClient } from "./axios";

let refreshing = false;

let queue: Array<{
  resolve: (token: string) => void;
  reject: (err: any) => void;
}> = [];

function resolveQueue(token: string) {
  queue.forEach((item) => {
    item.resolve(token);
  });

  queue = [];
}

function rejectQueue(error: any) {
  queue.forEach((item) => {
    item.reject(error);
  });

  queue = [];
}

export function setupInterceptor() {
  apiClient.interceptors.request.use((config) => {
    return config;
  });

  apiClient.interceptors.response.use(
    (res) => res,
    async (error) => {
      const original = error.config;

      if (error.response?.status === 401 && !original._retry) {
        original._retry = true;

        await apiClient.post("/auth/refresh");

        return apiClient(original);
      }

      return Promise.reject(error);
    },
  );
}
