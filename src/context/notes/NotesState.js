import Notescontext from "./Notescontext";
import { useState } from "react";


const NotesState  = (props)=>
{
    let host  = 'http://localhost:5000';
     let [logStatus,setLogStatus] = useState(false)
     let [token,setToken]  = useState('');
     let [notes,setNotes]   = useState();
     let fetchNotes = async(token)=>
     {
         let fetachedgData  = await fetch(host+'/api/fetchdata?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDNiMjc2NjRiY2ZkOTc1MWE5MGE2YSIsImlhdCI6MTY0NDU4MDkxOH0.6cTfSb7U48n3e61aAsbDjgB2sH2ob0NgsFwZtrb-_4s')
         setNotes(await fetachedgData.json())
     }
     return (
         <Notescontext.Provider value = {{logStatus,setLogStatus,fetchNotes,notes,setNotes}}>
               {props.children}
         </Notescontext.Provider>
     )
}


export default NotesState;