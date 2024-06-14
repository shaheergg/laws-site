import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Viewer from "./pages/Viewer";
function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/revisions/:revisionId" element={<Details />} />
          <Route
            path="/revisions/:revisionId/statutes/:statuteId"
            element={<Viewer />}
          />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
