import { defineStore } from "pinia";

// This is the store for the register page
const useRegisterStore = defineStore({
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
  getters: {
    getName: (state) => state.name,
    getPhone: (state) => state.phone,
    getEmail: (state) => state.email,
    getPassword: (state) => state.password,
    getConfirmPassword: (state) => state.confirmPassword,
    getWebsite: (state) => state.website,
    getTermsAccepted: (state) => state.termsAccepted,
  },
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

// Exporta a instância do roteador como padrão, para que possa ser importada em outros arquivos.
export default useRegisterStore;
