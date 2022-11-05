import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      console.log(user);
      if (user) {
        this.user = user;
      }
    },
    async signUp(email, password, firstName, lastName) {
      const { user, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
        },
        {
          data: {
            firstName: firstName,
            lastName: lastName,
          },
        }
      );
      if (error) throw error;
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (user) this.user = user;
      console.log("iniciando", user);
      if (error) console.log(error);
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      this.user = null;
      if (error) console.log(error);
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
