import { useState } from "react";
import AuthApi  from '../../Shered/api'

function Register() {
  const api = AuthApi()


  console.log("IAm --> register");
  const [data, setdata] = useState([]);
  console.log(data);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dataEntered = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try{
        let response = await api.post("/auth/register",form)
        console.log(response)
      }catch(error){
        console.log("error from the register",error)
      }
    setdata(form);
  
  };
 
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={dataEntered}
          className="border"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={dataEntered}
          className="border"
        />
        <input
          type="number"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={dataEntered}
          className="border"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
