import React, { useState } from 'react'
import './navbarcomponent.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'
import {IoAdd} from 'react-icons/io5'
import SideBarComponent from './SideBarComponent'
// import WsNbComponent from '../widescreennavbarcomponent/WsNbComponent'
import WritingComponent from '../writingcomponent/WritingComponent'
const NavBarComponent = ({closebtn,
  addToArrayList,
  addbtn,
  fillterNoteByCateg,
  ischecked,
  checkedSet,
  windowswidth,
  searchfilter,
  addSearchFilter
  }) => {
  const [toggle, setToggle]=useState(false);
  const [allcateg, setAllCateg]= useState(true);
  const [personalcateg, setPersonalCateg] = useState(false)
  const [workcateg, setWorkCateg] = useState(false)
  const [homecateg, setHomeCateg] = useState(false)
  
  const toggleSet = (bool)=>{
    setToggle(bool)
  }

  const allClicked = (bool,categ)=>{
    setPersonalCateg(!bool)
    setWorkCateg(!bool)
    setHomeCateg(!bool)
    setAllCateg(bool)
    fillterNoteByCateg(categ)
    toggleSet(!bool)
  }
  const personalClicked = (bool,categ)=>{
    setWorkCateg(!bool)
    setHomeCateg(!bool)
    setPersonalCateg(bool)
    setAllCateg(!bool)
    fillterNoteByCateg(categ)
    toggleSet(!bool)
  }

  const workClicked = (bool,categ)=>{
    setWorkCateg(bool)
    setHomeCateg(!bool)
    setPersonalCateg(!bool)
    setAllCateg(!bool)
    fillterNoteByCateg(categ)
    toggleSet(!bool)
  }

  const homeClicked = (bool,categ)=>{
    setWorkCateg(!bool)
    setHomeCateg(bool)
    setPersonalCateg(!bool)
    setAllCateg(!bool)
    fillterNoteByCateg(categ)
    toggleSet(!bool)
  }

  return (
    <>
    <div className='notes-navbar-main'>
    <div className='notes-navbar-container'>
      <div className='notes-navbar-content'>
        <h1 className='notes-navbar-notes'>PaNote</h1>
      <div className='notes-navbar-container-below'>
        {searchfilter === "" ? 
        <><div className='notes-searchicon'><BsSearch size={20}/></div>
        <input className='notes-input' type="text" value={searchfilter} placeholder="Search" onChange={e=>addSearchFilter(e.target.value)}/></>
        :
        <><div className='notes-searchicon'></div>
        <input className='notes-input' type="text" value={searchfilter} placeholder="Search" onChange={e=>addSearchFilter(e.target.value)}/></>
        }
        <div className='notes-addicon-widescreen'><IoAdd size={22} onClick={()=>closebtn(true)}/></div>
        
        <div className='notes-hamburgericon'>
          <GiHamburgerMenu  className='btnnavbar' size={22} onClick={()=>setToggle(true)}/>
          </div>
      </div>
      </div>
    </div>
      {toggle && (<SideBarComponent 
        toggleSet={toggleSet} 
        ischecked={ischecked} 
        checkedSet={checkedSet}
        allcateg={allcateg}
        personalcateg={personalcateg}
        workcateg={workcateg}
        homecateg={homecateg}
        allClicked={allClicked}
        personalClicked={personalClicked}
        workClicked={workClicked}
        homeClicked={homeClicked}
      />)}
      <div className='notes-navbar-belowmain'>
        {/* <WsNbComponent ischecked={ischecked} checkedSet={checkedSet}/> */}
        {windowswidth>=600 && (<SideBarComponent 
        toggleSet={toggleSet} 
        ischecked={ischecked} 
        checkedSet={checkedSet}
        allcateg={allcateg}
        personalcateg={personalcateg}
        workcateg={workcateg}
        homecateg={homecateg}
        allClicked={allClicked}
        personalClicked={personalClicked}
        workClicked={workClicked}
        homeClicked={homeClicked}
      />)}
      </div>
    </div>
    {addbtn && (
        <WritingComponent closebtn={closebtn} addToArrayList={addToArrayList}/>
      )}
    </>
  )
}

export default NavBarComponent