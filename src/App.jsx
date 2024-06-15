import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Viewer from "./pages/Viewer";
import RevisionHeader from "./pages/RevisionHeader";
function App() {
  const data = {
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
            pdf: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
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
            pdf: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
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
            pdf: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
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
            pdf: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
            information: "",
          },
          {
            id: 2,
            title: "Revised Laws list of titles and chapters",
            code: "12-AB-23",
            pdf: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
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
            pdf: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
            information: "",
          },
        ],
      },
    ],
  };
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/revisions/:revisionId" element={<RevisionHeader />} />
          <Route path="/laws/:lawId" element={<Details />} />
          <Route path="/regulations/:regulationId" element={<Viewer />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
