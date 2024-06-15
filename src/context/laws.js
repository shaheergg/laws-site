import { create } from "zustand";

export const useLaws = create((set) => ({
  laws: [
    {
      id: 1,
      title: "Revised Laws list of titles and chapters",
      code: "A84",
      categoryId: 1,
      information: "",
      revisionId: 1,
      date: "12/12/2000",
    },
    {
      id: 2,
      title: "Animals (Importations) Act",
      code: "A85",
      information: "",
      date: "12/12/2000",
      revisionId: 2,
    },
  ],
  getLaws: (revisionId) => set({}),
}));
