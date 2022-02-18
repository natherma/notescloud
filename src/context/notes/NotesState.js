import Notescontext from "./Notescontext";
import { useState } from "react";


const NotesState  = (props)=>
{
     let [logStatus,setLogStatus] = useState(false)
     return (
         <Notescontext.Provider value = {{logStatus,setLogStatus}}>
               {props.children}
         </Notescontext.Provider>
     )
}


export default NotesState;