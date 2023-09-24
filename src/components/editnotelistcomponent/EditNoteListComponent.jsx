import React, { useState } from 'react'
import './editnotelistcomponent.css'
import categData from '../../constants/datacategory'
import {BsArrowLeft} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const EditNoteListComponent = ({
    toggleWillEdit,
    editid, 
    editlist, 
    edittitle, 
    editcateg,
    updateNoteList
    }) => {
  const [inputlist, setInputList]= useState(editlist);
  const [inputltitle, setInputTitle]= useState(edittitle);
  const [categ, setCateg]= useState(editcateg);
  const onSubmit=(e)=>{
    e.preventDefault()
    if(inputlist==="")return
    updateNoteList(editid, inputlist, inputltitle, categ)
    toggleWillEdit(false)
  }

  return (
    <div className='write-maincontainer'>
    <div className="write-navbar">
      <div className='write-navbar-above'>
        <input className='write-navbar-input' type="text" placeholder='Insert Title...' value={inputltitle} onChange={(e)=>setInputTitle(e.target.value)}/>
        <div className='write-dropdown'>
          <input className='write-navbar-input' type="text" placeholder='Select a category...' value={categ}/>
          <div className='write-dropdown-content'>
            {categData.map(list=>{
              return <input className='dropdown-list' readonly value={list.category} onClick={(e)=>{setCateg(e.target.value);}}></input>
            })}
          </div>
        </div>
      </div>
      <div className='write-navbar-below'>
        <div>
          <BsArrowLeft className='back-list' size={30} onClick={()=>toggleWillEdit(false)}/>
          <AiOutlineCheckCircle className='check-list'  size={30} onClick={onSubmit}/>
        </div>
        <RiDeleteBin6Line className='delete-list' color='#FFF' size={30} />
      </div>    
    </div>
    <div className='write-content'>
        <textarea placeholder='What do you want to do?' value={inputlist} onChange={(e)=>setInputList(e.target.value)}></textarea>
    </div>
  </div>
  )
}

export default EditNoteListComponent