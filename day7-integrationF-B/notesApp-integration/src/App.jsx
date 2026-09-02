import React, {useState, useEffect}from 'react'
import axios from 'axios'


function App() {
  const [notes,setNotes] = useState([])

  const [formVal,setFormVal] = useState({
      title:'',
      description:''
    })

  const handleChange = (e) =>{
    setFormVal((prev) => ({...prev,[e.target.name]:e.target.value}))
  }
  const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    console.log("Sending:", formVal);

    const res = await axios.post(
      "http://localhost:3500/note/create",
      formVal
    );

    console.log("Response:", res.data);

    setFormVal({
      title: "",
      description: ""
    });

  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
  }
};

const getData = async () =>{
  try{
    let res = await axios.get("http://localhost:3500/note/allNotes")
    console.log(res.data)
    setNotes(res.data)
  }catch(error){
    console.log("error from catch",error)
  }
}

// getData()
useEffect(()=>{
  getData()
},[])

  return (
    <div className='bg-black h-screen p-2'>
      <h1 className='text-white p-2'>Notes App</h1>
      <form  className='flex flex-col w-70 gap-5 border border-gray-200 rounded p-2'onSubmit={onSubmitHandler}>
        <input value={formVal.title }name='title' onChange={handleChange} type='text 'className='border border-gray-200 rounded py-2  text-white pl-2'placeholder='Title '/>
        <input value={formVal.description}  name='description' onChange={handleChange} type='text' className='border border-gray-200 rounded py-2 text-white pl-2' placeholder='description'/>
        <button className='text-white bg-blue-500 py-2 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App

// value={formVal.title}
// {formVal.description}