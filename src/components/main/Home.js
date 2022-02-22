import React,{useContext,useEffect} from 'react'
import Notescontext from '../../context/notes/Notescontext'

export default function Home() {
  let {logStatus,setLogStatus,fetchNotes,notes,setNotes} = useContext(Notescontext);
  useEffect(()=>{
    fetchNotes();
  },[])
  return (
    <div className='container mt-4'>
    <h1>
      All Notes
    </h1>
  </div>
  )
}
