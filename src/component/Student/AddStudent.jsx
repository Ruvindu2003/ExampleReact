import React, { useState } from 'react'
const [student,SetStudent]=useState({
  Name :"",
  Adrees:"",
  Age:"",
  Gender:"",
})
const{Name,Adrees,Age,Gender}=student
const handleInputChange=(e)=>{
  SetStudent({...student,[e.tagert.name]:e.tagert.value})
};
const AddStudent = () => {
  return (
    <div className='col-sm-8 py-2 px-5 '>
      <form action="">
      <div className='input-group mb-5'>

        <label className='input-group-text'
        htmlFor='Name'>Name</label>
       <input className='form-control col-sm-6'
       type='text'name='Name'id='Name'required value={Name}
       onChange={(e=>handleInputChange(e))}/>
       
       </div>

       <div className='input-group mb-5'>

        <label className='input-group-text'
        htmlFor='Adrees'>Adrees</label>
       <input className='form-control col-sm-6'
       type='text'name='Adress'id='Adrees'required value={Adrees}
       onChange={(e=>handleInputChange(e))}/>
       </div>

       <div className='input-group mb-5'>
        <label className='input-group-text'
        htmlFor='Age'>Age</label>
       <input className='form-control col-sm-6'
       type='text'name='Age'id='Age'required value={Age}
       onChange={(e=>handleInputChange(e))}/>
       </div>


       <div className='input-group mb-5'>

        <label className='input-group-text'
        htmlFor='Gender'>Gender</label>
       <input className='form-control col-sm-6'
       type='text'name='Gender'id='Gender'required value={Gender}
       onChange={(e=>handleInputChange(e))}/>
       </div>



      </form>
      
    </div>
  )
}

export default AddStudent

