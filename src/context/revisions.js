import { create } from "zustand";

export const useRevisions = create((set) => ({
  revisions: [
    {
      id: 1,
      name: "Revised Laws",
      year: "2021",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 1,
    },
    {
      id: 2,
      name: "Revised Laws",
      year: "2018",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 2,
    },
    {
      id: 3,
      name: "Revised Laws",
      year: "2014",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 3,
    },
    {
      id: 4,
      name: "Revised Laws",
      year: "2009",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 4,
    },
    {
      id: 5,
      name: "Revised Laws",
      year: "1998",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: "1",
    },
  ],
  getRevisions: () => set({}),
}));
