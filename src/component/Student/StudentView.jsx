import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router';


const StudentView = () => {
   const[Student, setStudent] = useState([{id: 52, name: "John Doe", adrees: "123 Main Street"}]);
   useEffect(() => {
       loadStudent();
   }
   ,[]);
      const loadStudent = async () => {
      const result=await axios.get("http://localhost:8080/student/get-All",{
       validateStatus:()=>{
           return true;
       },
      }
   );
      if(result.status===200){
          console.log(result.data);
        setStudent(result.data);
     
        
           
       
        console.log(Student);
        
       }
   }
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
               {Student.map((student, index) => (
                   <tr key={index}>
                       <td>{student.id}</td>
                       <td>{student.name}</td>
                       <td>{student.adrees}</td>
                       <td>{student.age}</td>
                       <td>{student.gender}</td>
                       <td >
                        <Link to={`/edit-student/${student.id}`}></Link>
                        <FaEdit/>
                       </td>

                       <td className='mx-2'>
                           <Link to={`to-student-profile/${student.id}`} className='btn btn-info'><FaEye/></Link >
                       </td>
                       <td className='mx-2'>
                           <button className='btn btn-danger'><FaTrashAlt/></button>
                       </td>
                   </tr>
               ))}
           </tbody>
       </table>
   </section>
)
}

export default StudentView
