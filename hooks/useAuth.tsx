import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  password: string;
}

type UserStore = {
  user: null | User;
  setUser: (user: User | null) => void;
};

export const useAuth = create<UserStore>()(
  persist(
    (set, _get) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
