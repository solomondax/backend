import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'


function App() {
  const { register, handleSubmit} = useForm();


  // console.log(formData)

  const onSubmit = async (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("age", data.age);

  for (let i = 0; i < data.filePic.length; i++) {
    formData.append("filePic", data.filePic[i]);
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/user/create",
      formData
    );

    console.log("response data",response.data);
  } catch (error) {
    console.log(" Errors from frontend",error);
  }
};
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 border' >
    <h1 className='text-2xl font-bold text-white pb-5'>Form Data</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-50 gap-5 border border-gray-300 rounded-md p-5 bg-gray-700 '>
      <input type="text" name="name" {...register("name")} className='border border-gray-300 rounded-md p-2  text-white'/>
      <input type="number" name="age" {...register("age")} className='border border-gray-300 rounded-md p-2  text-white'/>
      <input type="file" name="filePic" {...register("filePic")} multiple className='border border-gray-300 rounded-md p-2  text-white'/>
      <button type="submit" className='bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600'>
        Submit
      </button> 
    </form>
      
    </div>
  )
}

export default App
