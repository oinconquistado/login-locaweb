import { defineStore } from "pinia";

// This is the store for the login page
const useLoginStore = defineStore({
  id: "user",
  state: () => ({
    email: "",
    password: "",
  }),
  getters: {
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
  },
  actions: {
    setEmail(email: string) {
      this.email = email;
    },
    setPassword(password: string) {
      this.password = password;
    },
  },
});

export default useLoginStore;
