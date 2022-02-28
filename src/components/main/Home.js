import React,{useContext,useEffect} from 'react'
import Notescontext from '../../context/notes/Notescontext'

export default function Home() {
  let {token} = useContext(Notescontext);
  useEffect(()=>{
    console.log(token)
  },[token])
  return (
    <div className='container mt-4'>
    <h1>
      All Notes
    </h1>
  </div>
  )
}
