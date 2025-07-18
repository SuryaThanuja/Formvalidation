import React, { useEffect, useState } from "react";
import axios from "axios";
import EnquiryForm from "./EnquiryForm";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/courses").then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((course) => (
        <div key={course.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button onClick={() => setSelectedCourse(course)}>Enquire</button>
        </div>
      ))}
      {selectedCourse && (
        <EnquiryForm
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};

export default CourseList;
