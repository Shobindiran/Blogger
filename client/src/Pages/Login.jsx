import React,{useState} from 'react'

const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");

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
      setErrorMessage("Succesfully logged in")
    }
    else{
      setErrorMessage(error);
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
            <p>{errorMessage}</p>
            <button type="submit" className="mybtn solid">Submit</button>
          </form>
        </div> 
      </div>
    </section>
  )
}

export default Login