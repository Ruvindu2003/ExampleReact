import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Editstudent = () => {
  const navigate = useNavigate();

  const [searchId, setSearchId] = useState("");
  const [student, setStudent] = useState({
    name: "",
    adrees: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    if (!searchId) {
      alert("Please enter a student ID to search.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/student/Search-by-id/${searchId}`
      );
      const studentData = response.data;
      setStudent({
        name: studentData.name,
        adrees: studentData.adrees,
        age: studentData.age,
        gender: studentData.gender,
      });
      alert("Student found!");
    } catch (error) {
      console.error("Error searching for student:", error);
      alert("Student not found!");
    }
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    console.log("Student Data:", student);

    try {
      const response = await axios.put(
        "http://localhost:8080/student/Update-Student",
        { ...student, age: parseInt(student.age) || 0 }
      );
      console.log("Response:", response.data);
      alert("Student updated successfully!");
      navigate("/view-student");
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Error updating student!");
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5">
      <h2>Edit Student</h2>

      
      <div className="input-group mb-5">
        <label className="input-group-text" htmlFor="searchId">
          Search by ID
        </label>
        <input
          className="form-control col-sm-6"
          type="text"
          name="searchId"
          id="searchId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {}
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
            name="adrees"
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
            onChange={(e) =>
              setStudent({ ...student, age: parseInt(e.target.value) || "" })
            }
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
           Edit Student
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

export default Editstudent;