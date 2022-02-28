import React,{useContext} from 'react'
import Notescontext from '../../context/notes/Notescontext'
import { Link } from 'react-router-dom';

function SignIn() {
  let {setToken,host} = useContext(Notescontext);
  let logIn = async(e)=>
     {
       
  let emailv = document.getElementById('exampleInputEmail1');
  let passwordv = document.getElementById('exampleInputPassword1')
         e.preventDefault();
         const getCircularReplacer = () => {
          const seen = new WeakSet();
          return (key, value) => {
            if (typeof value === "object" && value !== null) {
              if (seen.has(value)) {
                return;
              }
              seen.add(value);
            }
            return value;
          };
        };
        
         fetch(host+"/api/auth/login",
         {
             method:"post",
             headers: {
                'Content-Type': 'application/json',
              },
             body: JSON.stringify({
                 email: String(emailv.value),
                 password:String(passwordv.value)
             },getCircularReplacer())
         }).then((response)=>
         {
            response.json().then(data =>
              {
                setToken(data.token);
              })
         })
         
     }
  return (
    <main className='loginPage'>
        <div className='loginForm'>
        <form onSubmit={logIn} className='bg-dark px-3 py-5'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
  </div>
  <button type="submit" className="btn btn-outline-info  mt-3">Sign in</button>
  <Link to='/signup' className="btn btn-outline-info  mt-3 mx-3">Sign Up</Link>
</form>
        </div>
    </main>
  )
}

export default SignIn