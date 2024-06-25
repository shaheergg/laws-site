import { create } from "zustand";
import { BASE_URL } from "../constants";

export const useRegulations = create((set) => ({
  regulations: [],
  fetchRegulations: async (lawId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/laws/${lawId}`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      set({ regulations: data.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
