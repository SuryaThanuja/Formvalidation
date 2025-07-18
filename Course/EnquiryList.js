import React, { useEffect, useState } from "react";
import axios from "axios";

const EnquiryList = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/enquiries").then((res) => {
      setEnquiries(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Enquiries</h2>
      {enquiries.map((enquiry, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", padding: 10 }}>
          <p><strong>Name:</strong> {enquiry.name}</p>
          <p><strong>Email:</strong> {enquiry.email}</p>
          <p><strong>Course:</strong> {enquiry.courseTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default EnquiryList;
