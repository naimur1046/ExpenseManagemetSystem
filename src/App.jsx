import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import PageManagement from "./Pages/PageManagement";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pagemanagement" element={<PageManagement />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
