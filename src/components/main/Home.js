import React,{useContext,useEffect} from 'react'
import Notescontext from '../../context/notes/Notescontext'

export default function Home() {
  let {logStatus,setLogStatus,fetchNotes,notes,setNotes} = useContext(Notescontext);
  useEffect(()=>{
    fetchNotes();
    console.log(notes)
  },[])
  return (
    <div>Home </div>
  )
}
