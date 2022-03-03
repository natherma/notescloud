import React,{useContext} from 'react'
import Notescontext from '../../context/notes/Notescontext'
import  {useNavigate} from 'react-router-dom'

function AddNotes() {
  let {token,host} = useContext(Notescontext);
  let navigate = useNavigate();
  let navigateFnc = ()=>
  {
    navigate('/');
  }
  let addnotes =async (e)=>
  {
    e.preventDefault();
    const getCircularReplacer = () => {
     const seen = new WeakSet();
     return (key, value) => {
       if (typeof value === "object" && value !== null) {
         if (seen.has(value)) {
           return;
         }
         seen.add(value);
       }
       return value;
     };
   };
   fetch(host+`/api/addnotes?token=${token}`,
   {
       method:"post",
       headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({
           title:String(document.getElementById('title').value),
           description:String(document.getElementById('exampleFormControlTextarea1').value),
           tag:String( document.getElementById('tag').value),
       },getCircularReplacer())
   }).then(()=>
   {
     navigateFnc();
   })  

  }
    if(token)
    {
     return(
      <>
      <div className="alert alert-info" role="alert" style={{display:"none"}}>
      you are loged in,Welcome back user
    </div>
      <main className='loginPage'>
          <div className='loginForm'>
          <form className='bg-dark px-3 py-5' onSubmit={addnotes}>
    <div className="form-group">
      <label htmlFor="title" className='text-light'>Title</label>
      <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" required/>
      <small id="emailHelp" className="form-text text-muted">Enter a title for your note</small>
    </div>
    <div className="form-group">
      <label htmlFor="tag" className='tect-light'>Tag</label>
      <input type="text" className="form-control" id="tag" placeholder="Tag" defaultValue={'General'}/>
    </div>
    <div className="form-group mt-3">
    <label htmlFor="exampleFormControlTextarea1" className='text-light'>Enter Your Notes</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
  </div>

    <button type="submit" className="btn btn-outline-info  mt-3">Add Note</button>
    
  </form>
          </div>
      </main>
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