import React,{useContext,useEffect} from 'react'
import Notescontext from '../../context/notes/Notescontext'
import Notescomp from './subelements/Notescomp';

export default function Home() {
  let {token,setNotes,Notes,notes,host} = useContext(Notescontext);
  useEffect(()=>{
    if(token)
    {
      fetch(host+`/api/fetchdata?token=${token}`).then((response)=>
      {
         response.json().then(data =>
           {
             setNotes(data);
           })
      })
    }
  },[token,notes])
  if(token)
  {
   return(
     <>
     {
       notes.map((item)=>
       {
         return <div key={item.id}>
           {<Notescomp data={item} key={item.id}/>}
         </div>
       })
     }
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
