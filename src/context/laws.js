import { create } from "zustand";
import { BASE_URL } from "../constants";

export const useLaws = create((set) => ({
  laws: [],
  fetchLaws: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/revisions/${id}`);
      const data = await response.json();
      set({ laws: data.data });
    } catch (error) {
      throw new Error(error);
    }
  },
}));
