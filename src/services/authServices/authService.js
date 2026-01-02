import axiosInstance from "../axiosInstance";

export const AuthService = {
  validateUser: async () => {
    const response = await axiosInstance.get("api/donors/whoAmI");
    return response.data;
  },
  login: async (data) => {
    const response = await axiosInstance.post("api/donors/login", data);
    return response;
  },
  signUp: async (data) => {
    const response = await axiosInstance.post("api/donors/create", data);
    return response;
  },

  //   logout: async () => {
  //     const response = await axiosInstance.get("/api/customers/logout");
  //     return response.data;
  //   },
};
