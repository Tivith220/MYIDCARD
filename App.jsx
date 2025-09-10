import React, { useState } from "react";
import IDCard from "./IDCard";
import Form from "./Form";

export default function App() {
  const [student, setStudent] = useState({
    name: "THIRU B",
    dept: "B.E - ECE",
    regNo: "922522106451",
    dob: "24.10.2005",
    blood: "A+",
    father: "BALA",
    address: "769 RK NAGAR, K.PARAMATHI, KARUR - 638111",
    phone: "8309876543",
    photo: "/student.jpg", // put file in /public
    barcode: "/barcode.png", // put file in /public
  });

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <Form student={student} setStudent={setStudent} />
      <IDCard student={student} />
    </div>
  );
}
