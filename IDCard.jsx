import React from "react";
import "./IDCard.css";

export default function IDCard({ student }) {
  return (
    <div className="id-card">
      <img src="/IDHD.jpg" alt="ID Template" className="template-bg" />

      {/* Student Photo */}
      <img src={student.photo} alt="Student" className="student-photo" />

      {/* Info */}
      <div className="info dob">{student.dob}</div>
      <div className="info blood">{student.blood}</div>
      <div className="info name">{student.name}</div>
      <div className="info dept">{student.dept}</div>
      <div className="info reg">Reg No: {student.regNo}</div>
      <div className="info addr">
        S/O, {student.father}, {student.address}
        <br /> Phone: {student.phone}
      </div>

      {/* Barcode */}
      <img src={student.barcode} alt="Barcode" className="barcode" />
    </div>
  );
}
