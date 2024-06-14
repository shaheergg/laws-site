import { create } from "zustand";

export const useLaws = create((set) => ({
  revision: {},
  statute: {},
  revisions: [
    {
      id: 1,
      title: "Revised Laws",
      year: "2021",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 1,
      statutes: [
        {
          id: 1,
          title: "Revised Laws list of titles and chapters",
          code: "12-AB-23",
          pdf: "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=",
          information: "",
        },
      ],
    },
    {
      id: 2,
      title: "Revised Laws",
      year: "2018",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 2,
      statutes: [
        {
          id: 1,
          title: "Revised Laws list of titles and chapters",
          code: "12-AB-23",
          pdf: "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=",
          information: "",
        },
      ],
    },
    {
      id: 3,
      title: "Revised Laws",
      year: "2014",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 3,
      statutes: [
        {
          id: 1,
          title: "Revised Laws list of titles and chapters",
          code: "12-AB-23",
          pdf: "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=",
          information: "",
        },
      ],
    },
    {
      id: 4,
      title: "Revised Laws",
      year: "2009",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: 4,
      statutes: [
        {
          id: 1,
          title: "Revised Laws list of titles and chapters",
          code: "12-AB-23",
          pdf: "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=",
          information: "",
        },
        {
          id: 2,
          title: "Revised Laws list of titles and chapters",
          code: "12-AB-23",
          pdf: "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=",
          information: "",
        },
      ],
    },
    {
      id: 5,
      title: "Revised Laws",
      year: "1998",
      cdImg: "https://source.unsplash.com/random/200x200",
      order: "1",
      statutes: [
        {
          id: 1,
          title: "2021 Revised Laws list of titles and chapters",
          code: "12-AB-23",
          pdf: "https://gov.tc/agc/component/edocman/2021-revised-laws-list-of-titles-and-chapters/viewdocument/2021?Itemid=",
          information: "",
        },
      ],
    },
  ],
  selectRevision: (id) =>
    // return the revision with the id passed as an argument
    set((state) => ({
      revision: state.revisions.find((revision) => revision.id === id),
    })),
  selectStatute: (revisionId, statuteId) =>
    // return the statute with the id passed as an argument
    set((state) => ({
      statute: state.revisions
        .find((revision) => revision.id === revisionId)
        .statutes.find((statute) => statute.id === statuteId),
    })),
}));
