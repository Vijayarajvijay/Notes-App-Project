import React, { useContext, useState } from 'react'
import { NotesDataContext } from './context/NotesContext'
import {useNavigate} from 'react-router-dom'
import noteimg from '../assets/notes icon black.svg'
import editimg from '../assets/edit.svg'
import deleteimg from '../assets/delete.svg'

function Notesarea() {
  let {data,setData}=useContext(NotesDataContext)
  let navigate=useNavigate()

  let handleDelete= (index)=>{
    let newArray = [...data]
    newArray.splice(index,1)
    setData(newArray)
  }

  let [title,setTitle]=useState("")
  let [des,setDes] = useState("")
  let handleSave = ()=>{
    let newArray = [...data]
    newArray.push({
      title,
      des
    })
    setData(newArray)
}

  
  return (<>

    <div id='container-fluid'>
        
      <div className='addnote bg-white '>
       <div className='input'>
        <h3 className='top1'> Add a Note</h3>
       <input className='title' type="text" placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}} />
        <textarea class="form" id="exampleFormControlTextarea1" placeholder='Take a note...' rows="3" onChange={(e)=>setDes(e.target.value)} ></textarea>

       </div>
       <span className='btn btn-primary mt-2 ' onClick={()=>handleSave()}> Add Notes</span>

      </div>

    <div class="row" id='footer'>
      <div className='recent d-flex gap-4 mb-2' >
        <img src={noteimg} alt="note" />
        <h4 style={{fontSize:'24px', color:'#203562'}}> My Notes </h4> <br/>
       </div>
       
       <p style={{fontSize:'16px',color:'#203562'}}> Recently viewed</p>

       <div className='row-main d-flex gap-3'>
        {
          data.map((e,i)=>{
           return<div key={i}>
        <div class="card " style={{width:'317px',height:'263px', borderRadius:'16px'}}>
      <div className='card-main d-flex'>
      <h4 style={{fontSize:'24px',color:'#203562',padding:'20px 0px 0px 15px'}}>{e.title}</h4>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div className='mt-4'>
     
     <a href="">
      <img src={editimg} alt="" onClick={()=>{navigate(`/edit/${i}`)}} /> 
     </a> &nbsp;
      <a href=""><img src={deleteimg} alt="delete"  onClick={()=>handleDelete(i)}/>
      </a>
      </div> 

      </div>
      <div class="card-body">
        <p className='mb-3' style={{fontSize:'16px', color:'303030'}}>{e.des}</p>
      
         <p className='fs-6'> 5 days ago</p>
      </div>
    </div>
    </div>
})


    }

 
   
 
   </div>


</div>

     </div>
      
      

     </>

  )
}

export default Notesarea