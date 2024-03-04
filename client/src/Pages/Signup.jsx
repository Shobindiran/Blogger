import React, {useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const signup = (e)=>{
    e.preventDefault();
    
    fetch("http://localhost:8000/signup",{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{"Content-Type":"application/Json"}
    })
  }

  return (
    <section className="signup">
      <div className="container">
        <div className="signup-wrapper">
          <h2 className='display-5 pb-2'>Signup !</h2>
          <form onSubmit={signup}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username :</label>
              <input type="text" className="form-control" value={username} onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="mybtn solid">Submit</button>
          </form>
        </div> 
      </div>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </section>
  )
};

export default Signup;
