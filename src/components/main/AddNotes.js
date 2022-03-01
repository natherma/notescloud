import React,{useContext,useEffect} from 'react'
import Notescontext from '../../context/notes/Notescontext'


function AddNotes() {
  let {token} = useContext(Notescontext);
    if(token)
    {
     return(
       <>
        <h1>Add notes</h1>
       </>
     )
    }
    else
    {
      return (
        <>
        <h1 className='text-center'>
          Please login to see Notes or join us to use our services
        </h1>
        </>
      )
    }
}

export default AddNotes