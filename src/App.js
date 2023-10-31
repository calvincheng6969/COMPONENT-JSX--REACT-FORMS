import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadForm from "./component/UploadForm";
import UploadForm2 from "./component/UploadForm2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/UploadForm" element={<UploadForm />} />
        <Route path="/UploadForm2" element={<UploadForm2 />} />
      </Routes>
    </Router>
  );
}

export default App;
