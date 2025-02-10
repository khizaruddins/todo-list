export const API_URLS = {
  GET_ALL_TODOS: () => '/todos',
  POST_TODO: () => '/todos',
  GET_TODO: (id: string) => `/todos/${id}`,
  DELETE_TODO: (id: string) => `/delete/${id}`,
  PUT_TODO: (id: string) => `/todos/${id}`,
  GET_PROFILE: (id: string) => `/profiles/${id}`,
  UPDATE_PROFILE: (id: string) => `profiles/${id}`,
  REGISTER_PROFILE: () => `/auth/create`,
  LOGIN: () => `/auth/login`,
  RESET_PASSWORD: () => `/auth/reset-password`,
  GET_ACCESS_TOKEN: () => `/auth/access-token`,
};
