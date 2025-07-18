import React, { useState } from "react";
import axios from "axios";

const EnquiryForm = ({ course, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enquiry = {
      ...formData,
      courseId: course.id,
      courseTitle: course.title,
    };
    axios.post("http://localhost:5000/enquiries", enquiry).then(() => {
      alert("Enquiry submitted!");
      onClose();
    });
  };

  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <h3>Enquire about: {course.title}</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />
        <input
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Submit</button>
        <button onClick={onClose} type="button">Cancel</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
