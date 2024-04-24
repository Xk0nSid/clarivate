import axios from "axios";

const basicAuthConfig = {
  auth: {
    username: "app",
    password: "app@123",
  },
};

const UsersService = {
  fetchUsers: async () => {
    const resp = await axios.get(
      "http://localhost:3000/users",
      basicAuthConfig
    );
    if (resp.data.success) {
      return resp.data.data;
    }
    return [];
  },
  getUser: async (id: number) => {
    const resp = await axios.get(
      "http://localhost:3000/users/" + id.toString(),
      basicAuthConfig
    );
    if (resp.data.success) {
      return resp.data.data;
    }
    return {};
  },
  deleteUser: async (id: number) => {
    const resp = await axios.delete(
      "http://localhost:3000/users/" + id.toString(),
      basicAuthConfig
    );
    if (!resp.data.success) {
      return resp.data.errors;
    }
    return;
  },
};

export default UsersService;
