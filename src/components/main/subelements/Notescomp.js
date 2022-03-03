import React ,{useContext}from 'react'
import Notescontext from '../../../context/notes/Notescontext'

export default function Notescomp(props) {
  let {title,description,tag,_id} = props.data
  let {token,host} = useContext(Notescontext);
  let deleteNote = ()=>
  {
    fetch(host+`/api/deletenote/${_id}/?token=${token}`,{method:'delete'})
  }
  return (
    <div className="card text-white bg-info mb-3">
  <div className="card-header">
  <span>{`# ${tag}`}</span> 
  <img src="https://img.icons8.com/material-rounded/22/000000/filled-trash.png" onClick={deleteNote} alt="delete logo"/></div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
</div>
  )
}
