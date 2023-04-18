import { defineStore } from "pinia";

export const useRegisterStore = defineStore({
  id: "user",
  state: () => ({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    termsAccepted: false,
  }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
    setPhone(phone: string) {
      this.phone = phone;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setPassword(password: string) {
      this.password = password;
    },
    setConfirmPassword(confirmPassword: string) {
      this.confirmPassword = confirmPassword;
    },
    setWebsite(website: string) {
      this.website = website;
    },
    setTermsAccepted(accepted: boolean) {
      this.termsAccepted = accepted;
    },
  },
});
