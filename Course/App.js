import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseList from "./components/CourseList";
import EnquiryList from "./components/EnquiryList";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Courses</Link> | <Link to="/enquiries">Enquiries</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/enquiries" element={<EnquiryList />} />
      </Routes>
    </Router>
  );
}

export default App;
