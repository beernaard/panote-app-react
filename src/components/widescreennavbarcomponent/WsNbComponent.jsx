import React, { useState } from 'react'
import './wsnbcomponent.css'
import {ImCheckboxUnchecked} from 'react-icons/im'
import {ImCheckboxChecked} from 'react-icons/im'
const WsNbComponent = ({ischecked, checkedSet}) => {
    const [allisactive, setAllIsActive] = useState(true);
    const [personalisactive, setPersonalIsActive] = useState(false);
    const [homelisactive, setHomeIsActive] = useState(false);
    const [professionalisactive, setProfessionalIsActive] = useState(false);
  return (
    <div className='app-navbar-widescreen'>
      <div className='app-navbar-widescreen-content'>
        <div className='app-navbar-widescreen-p'>
          <p onClick={()=>{
            setAllIsActive(true);
            setPersonalIsActive(false);
            setHomeIsActive(false);
            setProfessionalIsActive(false);
          }}>{allisactive ?(
            <p style={{color:"rgb(84, 84, 229)", transform:'scale(1.4)'}}>All</p>
          ): <p>All</p>}</p>
          <p onClick={()=>{
            setPersonalIsActive(true);
            setAllIsActive(false);
            setHomeIsActive(false);
            setProfessionalIsActive(false);
          }}>{personalisactive ?(
            <p style={{color:"rgb(84, 84, 229)", transform:'scale(1.4)'}}>Personal</p>
          ): <p>Personal</p>}</p>
          <p onClick={()=>{
            setPersonalIsActive(false);
            setAllIsActive(false);
            setHomeIsActive(true);
            setProfessionalIsActive(false);
          }}>{homelisactive ?(
            <p style={{color:"rgb(84, 84, 229)", transform:'scale(1.4)'}}>Home</p>
          ): <p>Home</p>}</p>
          <p onClick={()=>{
            setPersonalIsActive(false);
            setAllIsActive(false);
            setHomeIsActive(false);
            setProfessionalIsActive(true);
          }}>{professionalisactive ?(
            <p style={{color:"rgb(84, 84, 229)", transform:'scale(1.4)'}}>Professional</p>
          ): <p>Professional</p>}</p>
        </div>
        <div className='app-navbar-widescreen-checkbox'>
          {ischecked ? <ImCheckboxChecked className='app-navbar-uncheck' onClick={()=>checkedSet(false)}/> : <ImCheckboxUnchecked className='app-navbar-uncheck' onClick={()=>checkedSet(true)}/> }
          <p>Show Only completed notes</p>
        </div>
      </div>
    </div>
  )
}

export default WsNbComponent