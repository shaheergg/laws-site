import { create } from "zustand";
import { BASE_URL } from "../constants";
export const useRevisions = create((set) => ({
  revisions: [],
  fetchRevisions: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/revisions`);
      const data = await response.json();
      set({ revisions: data.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
