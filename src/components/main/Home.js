import React,{useContext,useEffect,useState} from 'react'
import Notescontext from '../../context/notes/Notescontext'
import Notescomp from './subelements/Notescomp';

export default function Home() {
  let {token,host} = useContext(Notescontext);
  let [notes,setNotes]   = useState([]);
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
  },[notes])
  
  if(token)
  {
   return(
     <div className="cardContainer">
     {
       notes.map((item)=>
       {
         return <div key={item._id}>
           {<Notescomp data={item} key={item._id}/>}
         </div>
       })
     }
     </div>
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
