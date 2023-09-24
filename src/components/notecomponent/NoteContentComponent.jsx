import React, { useState } from 'react'
import './notecontentcomponent.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FiEdit} from 'react-icons/fi'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {ImCheckboxChecked} from 'react-icons/im'
import EditNoteListComponent from '../editnotelistcomponent/EditNoteListComponent'
const NoteContentComponent = ({
    filterlist, 
    completedNotesList,
    deleteNoteList,
    updateNoteList
    }) => {
        const [willEdit, setWillEdit] =useState(false)

        const toggleWillEdit=(bool)=>{
            setWillEdit(bool)
        }
  return (
    <>
    {filterlist.completed?(<div key={filterlist.id} className='note-list-content-p' style={{backgroundColor:'rgb(159, 254, 200)'}}>
        <div className='dropdown'>
            {filterlist.category==="Personal"?
                (<div className='note-content-categ' style={{backgroundColor:'rgb(199, 251, 109)'}}>
                <h4>{filterlist.category}</h4>
                </div>):
                filterlist.category==="Work"?
                (<div className='note-content-categ' style={{backgroundColor:'rgb(255, 184, 103)'}}>
                <h4>{filterlist.category}</h4>
                </div>):
                filterlist.category==="Home"?
                (<div className='note-content-categ' style={{backgroundColor:' rgb(87, 228, 200)'}}>
                <h4>{filterlist.category}</h4>
                </div>): (<div className='note-content-categ' style={{backgroundColor:'rgb(87, 125, 228)'}}>
                <h4>{filterlist.category}</h4>
                </div>)
            }
            
            <div className='note-btn-content'>
                {filterlist.completed? (<ImCheckboxChecked className='checkbtn' size={20} onClick={()=>completedNotesList(filterlist.id,false)}/>):(<ImCheckboxUnchecked className='checkbtn' size={20} onClick={()=>completedNotesList(filterlist.id,true)}/>)}
                <FiEdit className='editbtn' size={22} onClick={()=>toggleWillEdit(true)}/>
                <RiDeleteBin6Line className='deletebtn' size={24} onClick={()=>deleteNoteList(filterlist.id)}/>
            </div>
        </div>
            <div className='note-content'>
                <h1>{filterlist.title}</h1>
                <p>{filterlist.inputlist}</p>
            </div> 
            {willEdit && <EditNoteListComponent 
                toggleWillEdit={toggleWillEdit}
                editid={filterlist.id} 
                editlist={filterlist.inputlist} 
                edittitle={filterlist.title} 
                editcateg={filterlist.category}
                updateNoteList={updateNoteList}
                />}
    </div>)
    :
    (<div key={filterlist.id} className='note-list-content-p'>
        <div className='dropdown'>
            {filterlist.category==="Personal"?
                (<div className='note-content-categ' style={{backgroundColor:'rgb(199, 251, 109)'}}>
                <h4>{filterlist.category}</h4>
                </div>):
                filterlist.category==="Work"?
                (<div className='note-content-categ' style={{backgroundColor:'rgb(255, 184, 103)'}}>
                <h4>{filterlist.category}</h4>
                </div>):
                filterlist.category==="Home"?
                (<div className='note-content-categ' style={{backgroundColor:' rgb(87, 228, 200)'}}>
                <h4>{filterlist.category}</h4>
                </div>): (<div className='note-content-categ' style={{backgroundColor:'rgb(87, 125, 228)'}}>
                <h4>{filterlist.category}</h4>
                </div>)
            }
            
            <div className='note-btn-content'>
                {filterlist.completed? (<ImCheckboxChecked className='checkbtn' size={20} onClick={()=>completedNotesList(filterlist.id,false)}/>):(<ImCheckboxUnchecked className='checkbtn' size={20} onClick={()=>completedNotesList(filterlist.id,true)}/>)}
                <FiEdit className='editbtn' size={22} onClick={()=>toggleWillEdit(true)}/>
                <RiDeleteBin6Line className='deletebtn' size={24} onClick={()=>deleteNoteList(filterlist.id)}/>
            </div>
        </div>
            <div className='note-content'>
                <h1>{filterlist.title}</h1>
                <p>{filterlist.inputlist}</p>
            </div> 
            {willEdit && <EditNoteListComponent 
    toggleWillEdit={toggleWillEdit}
    editid={filterlist.id} 
    editlist={filterlist.inputlist} 
    edittitle={filterlist.title} 
    editcateg={filterlist.category}
    updateNoteList={updateNoteList}
    />}
    </div>)
    }
    </>
  )
}

export default NoteContentComponent