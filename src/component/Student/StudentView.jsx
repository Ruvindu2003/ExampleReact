import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Changed to 'react-router-dom'

const StudentView = () => {
   const [students, setStudents] = useState([]);

   useEffect(() => {
       loadStudents();
   }, []);

   const loadStudents = async () => {
       try {
           const result = await axios.get("http://localhost:8080/student/get-All");
           if (result.status === 200) {
               setStudents(result.data);
           }
       } catch (error) {
           console.error("Error fetching students:", error);
       }
   };

   const handleDelete = async (id) => {
       try {
           await axios.delete(`http://localhost:8080/student/Student-Delete/${id}`);
           setStudents(students.filter(student => student.id !== id)); // Remove student from state
       } catch (error) {
           console.error("Error deleting student:", error);
       }
   };

   return (
       <section>
           <table className='table table-bordered table-hover shadow'>
               <thead>
                   <tr className='text-center'>
                       <th>Student ID</th>
                       <th>Student Name</th>
                       <th>Address</th>
                       <th>Age</th>
                       <th>Gender</th>
                       <th colSpan="3">Actions</th>
                   </tr>
               </thead>
               <tbody className='text-center'>
                   {students.map((student, index) => (
                       <tr key={index}>
                           <td>{student.id}</td>
                           <td>{student.name}</td>
                           <td>{student.adrees}</td>
                           <td>{student.age}</td>
                           <td>{student.gender}</td>
                           <td>
                               <Link to={`/edit-student/${student.id}`} className='btn btn-warning'>
                                   <FaEdit />
                               </Link>
                           </td>
                           <td className='mx-2'>
                               <Link to={`/student-profile/${student.id}`} className='btn btn-info'>

                                   <FaEye />
                                   
                               </Link>
                           </td>
                           <td className='mx-2'>
                               <button className='btn btn-danger' onClick={() => handleDelete(student.id)}>
                                   <FaTrashAlt />
                               </button>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </section>
   );
};

export default StudentView;
