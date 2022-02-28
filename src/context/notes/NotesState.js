import Notescontext from "./Notescontext";
import { useState } from "react";


const NotesState  = (props)=>
{
    let host  = 'http://localhost:5000';
     let [logStatus,setLogStatus] = useState(false)
     let [token,setToken]  = useState('');
     let [notes,setNotes]   = useState([]);
     return (
         <Notescontext.Provider value = {{logStatus,setLogStatus,notes,setNotes,token,setToken,host}}>
               {props.children}
         </Notescontext.Provider>
     )
}


export default NotesState;