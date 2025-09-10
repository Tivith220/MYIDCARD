import React from "react";

export default function Form({ student, setStudent }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div style={{ width: "300px" }}>
      <h2>Enter Student Details</h2>
      <label>Name:</label>
      <input name="name" value={student.name} onChange={handleChange} />

      <label>Department:</label>
      <input name="dept" value={student.dept} onChange={handleChange} />

      <label>Register No:</label>
      <input name="regNo" value={student.regNo} onChange={handleChange} />

      <label>D.O.B:</label>
      <input name="dob" value={student.dob} onChange={handleChange} />

      <label>Blood Group:</label>
      <input name="blood" value={student.blood} onChange={handleChange} />

      <label>Father Name:</label>
      <input name="father" value={student.father} onChange={handleChange} />

      <label>Address:</label>
      <textarea name="address" value={student.address} onChange={handleChange} />

      <label>Phone:</label>
      <input name="phone" value={student.phone} onChange={handleChange} />

      <label>Photo URL:</label>
      <input name="photo" value={student.photo} onChange={handleChange} />

      <label>Barcode URL:</label>
      <input name="barcode" value={student.barcode} onChange={handleChange} />
    </div>
  );
}
