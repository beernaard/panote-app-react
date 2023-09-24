import React from 'react'
import './sidebarcomponent.css'
import  {AiOutlineCloseCircle} from 'react-icons/ai'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {ImCheckboxChecked} from 'react-icons/im'

const SideBarComponent = ({toggleSet,
  ischecked,
  checkedSet,
  allcateg,
  personalcateg,
  workcateg,
  homecateg,
  allClicked,
  personalClicked,
  workClicked,
  homeClicked
  }) => {

  return (
    <div className='notes-navbar-sidebar'>
        <div className='notes-nafbar-siebar-content'>
        <AiOutlineCloseCircle className='notes_close' size={35} onClick={()=>toggleSet(false)}/>
        <ul className='notes-nafbar-sidebar-ul'>
          {allcateg? (<li className='notes-nafbar-sidebar-li-hover' onClick={()=>allClicked(true,"All")}>All</li>) : (<li className='notes-nafbar-sidebar-li' onClick={()=>allClicked(true,"All")}>All</li>)}
          {personalcateg?(<li className='notes-nafbar-sidebar-li-hover' onClick={()=>personalClicked(true,"Personal")}>Personal</li>):(<li className='notes-nafbar-sidebar-li' onClick={()=>personalClicked(true,"Personal")}>Personal</li>)}
          
          {workcateg?(<li className='notes-nafbar-sidebar-li-hover' onClick={()=>workClicked(true,"Work")}>Work</li>):(<li className='notes-nafbar-sidebar-li' onClick={()=>workClicked(true,"Work")}>Work</li>)}
          
          {homecateg?(<li className='notes-nafbar-sidebar-li-hover' onClick={()=>homeClicked(true,"Home")}>Home</li>):(<li className='notes-nafbar-sidebar-li' onClick={()=>homeClicked(true,"Home")}>Home</li>)}
          
        </ul>
        <div className='app-navbar-sidebar-checkbox'>
          {ischecked ? <ImCheckboxChecked className='app-navbar-uncheck' onClick={()=>checkedSet(false)}/> : <ImCheckboxUnchecked className='app-navbar-uncheck' onClick={()=>checkedSet(true)}/> }
          <p>Show Only completed notes</p>
        </div>
        </div>
      </div>
  )
}

export default SideBarComponent