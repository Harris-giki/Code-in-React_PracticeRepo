import apiClient from "./api-client";

interface user {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<user[]>("/users", {
      //changed URL here using services
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort };
  }
}

export default new UserService();
