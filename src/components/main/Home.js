import React,{useContext} from 'react'
import Notescontext from '../../context/notes/Notescontext'

export default function Home() {
  let {logStatus,setLogStatus} = useContext(Notescontext);
  console.log(logStatus,setLogStatus)
  return (
    <div>Home</div>
  )
}
