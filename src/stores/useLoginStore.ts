import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "user",
  state: () => ({
    email: "",
    password: "",
  }),
  actions: {
    setEmail(email: string) {
      this.email = email;
    },
    setPassword(password: string) {
      this.password = password;
    },
  },
});
