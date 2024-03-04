import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();


  const login = async (e)=>{
    e.preventDefault();
    
    const res = await fetch("http://localhost:8000/login",{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{"Content-Type":"application/Json"}
    })

    const data = await res.json();

    const {grantAccess,error} = data;

    if(grantAccess){
      toast.success(`Successfully logged in`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition:Bounce
        });

        navigate('/')
        
    }
    else{
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition:Bounce
        });
    }
  }

  return (
    <section className="login">
      <div className="container">
        <div className="login-wrapper">
          <h2 className='display-5 pb-2'>Login !</h2>
          <form onSubmit={login}>
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
      </div>
    </section>
  )
}
export default Login