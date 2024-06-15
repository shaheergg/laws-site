import { create } from "zustand";

export const useRegulations = create((set) => ({
  regulations: [
    {
      id: 1,
      lawId: 2,
      name: "Amblyomma Variegatun, Heartwater and Dermatophilosis",
      code: "A85-1",
      date: "15/12/2000",
      url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    },
  ],
  getRegulations: (lawId) => set({}),
}));
