import React,{useContext} from 'react'
import Notescontext from '../../context/notes/Notescontext'


export default function Signup() {
    let {host} = useContext(Notescontext);
    let signup = async(e)=>
       {
        let emailv = document.getElementById('exampleInputEmail1');
        let passwordv = document.getElementById('exampleInputPassword1')
        let namev = document.getElementById('exampleInputusername1')
        
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
          
           fetch(host+"/api/auth/createuser",
           {
               method:"post",
               headers: {
                  'Content-Type': 'application/json',
                },
               body: JSON.stringify({
                   email: String(emailv.value),
                   password:String(passwordv.value),
                   username:String(namev.value),
               },getCircularReplacer())
           }).then(()=>
           {
               document.location.replace('http://localhost:3000/signin')
           })    
       }
    return (
        <main className='loginPage'>
        <div className='loginForm'>
        <form onSubmit={signup} className='bg-dark px-3 py-5'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputusername1">Username</label>
    <input type="text" className="form-control" id="exampleInputusername1" placeholder="username" required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <button type="submit" className="btn btn-outline-info  mt-3">Sign up</button>
</form>
        </div>
    </main>
  )
}
