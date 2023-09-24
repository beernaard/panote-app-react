import React, { useState } from 'react'
import './writingcomponent.css'
import categData from '../../constants/datacategory'
import {BsArrowLeft} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const WritingComponent = ({ closebtn, addToArrayList}) => {
  const [inputlist, setInputList]= useState("");
  const [inputltitle, setInputTitle]= useState("");
  const [categ, setCateg]= useState("");
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log("HELLO")
    console.log(inputlist)
    if(inputlist==="")return
    addToArrayList(inputlist, inputltitle, categ)
    setInputList("")
    closebtn(false)
  }
  return (
    <div className='write-maincontainer'>
    <div className="write-navbar">
      <div className='write-navbar-above'>
        <input className='write-navbar-input' type="text" placeholder='Insert Title...' value={inputltitle} onChange={(e)=>setInputTitle(e.target.value)}/>
        <div className='write-dropdown'>
          <input className='write-navbar-input' type="text" placeholder='Select a category...' value={categ} readonly/>
          <div className='write-dropdown-content'>
            {categData.map(list=>{
              return <input className='dropdown-list' value={list.category} onClick={(e)=>{setCateg(e.target.value);}} readonly></input>
            })}
          </div>
        </div>
      </div>
      <div className='write-navbar-below'>
        <div>
          <BsArrowLeft className='back-list' size={30} onClick={()=>closebtn(false)}/>
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

export default WritingComponent