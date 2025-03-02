import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddStudent.css"; 

const AddStudent = () => {
  const navigate = useNavigate(); // Fixed useNavigate issue

  const [student, setStudent] = useState({
    name: "",  
    adrees: "", 
    age: "", 
    gender: "",
  });

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    console.log("Student Data:", student);
    

    try {
      const response = await axios.post(
        "http://localhost:8080/student/add-student",
        { ...student, age: parseInt(student.age) || 0 } 
      );
      console.log("Response:", response.data);
      alert("Student added successfully!");
      navigate("/view-student"); 
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Error adding student!");
    }
  };

  return (
    
    <div className="col-sm-8 py-2 px-5">
      <h1>Add Student</h1>
      <form onSubmit={saveStudent}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
           
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={student.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="address">
            Address
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="adrees" // Fixed typo
            id="adrees"
            required
            value={student.adrees}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="age">
            Age
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="age"
            id="age"
            required
            value={student.age}
            onChange={(e) => setStudent({ ...student, age: parseInt(e.target.value) || "" })}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="gender">
            Gender
          </label>
          <select
            className="form-control col-sm-6"
            name="gender"
            id="gender"
            required
            value={student.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>

        <div className="col-sm-2">
          <button type="submit" className="btn btn-outline-success btn-lg">
            Save
          </button>
        </div>
      </form>

      <div className="col-sm-2 mt-3">
        <Link to="/view-student" className="btn btn-outline-warning btn-lg">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default AddStudent;
