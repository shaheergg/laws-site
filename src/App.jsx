import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Viewer from "./pages/Viewer";
import RevisionHeader from "./pages/RevisionHeader";
import Dashboard from "./pages/admin/Dashboard";
import Laws from "./pages/admin/Laws";
import Regulations from "./pages/admin/Regulations";
import AddLaw from "./pages/admin/AddLaw";
import AddRevision from "./pages/admin/AddRevision";
import AddRegulation from "./pages/admin/AddRegulation";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/revisions/:revisionId" element={<RevisionHeader />} />
        <Route path="/laws/:lawId" element={<Details />} />
        <Route path="/regulations/:regulationId" element={<Viewer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/laws/:revisionId" element={<Laws />} />
        <Route path="/admin/regulations/:lawId" element={<Regulations />} />
        <Route path="/admin/laws/add" element={<AddLaw />} />
        <Route path="/admin/revisions/add" element={<AddRevision />} />
        <Route path="/admin/regulations/add" element={<AddRegulation />} />
      </Routes>
    </>
  );
}

export default App;
