import React,{useEffect,useContext} from 'react'
import {
   Link,useLocation
  } from "react-router-dom";
import Notescontext from '../../context/notes/Notescontext'

export default function Navbar() {
  let location = useLocation();
  let {logStatus,setLogStatus,setToken} = useContext(Notescontext); 
  useEffect(()=>
  {

  },[location,logStatus])
  let logOut = ()=>
  {
    setLogStatus(false)
    setToken('')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NotesCloud</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':""}`} aria-current="page" to="/">Notes</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/Add-Notes'?'active':""}`} to="/Add-Notes">AddNotes</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/AboutUs'?'active':""}`} to="/AboutUs">AboutUs</Link>
        </li>
      </ul>
      <form className="d-flex">
         <Link className={`btn btn-outline-info mx-1 my-3 ${logStatus?'disabled':''} `} to="/signin">Sign In</Link>
      </form>
      <form className="d-flex">
         <button className={`btn btn-outline-danger mx-1 my-3 ${logStatus?'':'disabled'} `} onClick={logOut}>Log out</button>
      </form>
    </div>
  </div>
</nav>
  )
}
