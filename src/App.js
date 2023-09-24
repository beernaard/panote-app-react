import React, { useEffect, useState } from 'react'
import './App.css'
import { NavBarComponent, NoteComponent, WritingComponent } from './components/index'
import {IoAdd} from 'react-icons/io5'
const App = () => {
  const [arraylist, setArrayList]= useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null)return []
    return JSON.parse(localValue)
  });
  const [addbtn,setAddBtn]= useState(false);
  const [filtercateg, setFilterCateg]=useState("All")
  const [ischecked, setIsChecked] = useState(false);
  const [windowswidth, setWindowsWidth]=useState(window.innerWidth)
  const [searchfilter, setSearchFilter]=useState("")
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(arraylist))
  },[arraylist])
  useEffect(()=>{
    const handleWindowResize = () => {
      setWindowsWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[])

  const addSearchFilter = (search)=>{
    console.log(searchfilter)
    setSearchFilter(search)
  }
  const fillterNoteByCateg = (categ) =>{
    setFilterCateg(categ)
  }
  const checkedSet = (bool)=>{
    setIsChecked(bool)
  }
  const addToArrayList = (inputlist, title, category)=>{
    setArrayList((currentArrayList) => {
      return[
        {id: crypto.randomUUID(),
          inputlist,
          title,
          category,
          completed:false
        },...currentArrayList
      ]
    })
  }

  const updateNoteList=(id,inputlist, title, category)=>{
    setArrayList((currentArrayList) => {
      return currentArrayList.map(list=>{
        if(list.id ===id){
          return {...list, inputlist, title, category}
        }
        return list
      })
    })
  }
  const completedNotesList=(id, completed)=>{
    setArrayList(currentlist=>{
      return currentlist.map(list=>{
        if(list.id ===id){
          return {...list, completed}
        }
        return list
      })
    })
  }

  const deleteNoteList=(id)=>{
    setArrayList(currentlist=>{
      return currentlist.filter(list => list.id !== id)
    })
  }
  const closeAddBtn = (exit)=>{
    setAddBtn(exit);
  }
  return (
    <div className='main-container'>
      <div className='note-card-container'>
        <div className='note-navbar'>
          <NavBarComponent 
          closebtn={closeAddBtn} 
          addToArrayList={addToArrayList} 
          addbtn={addbtn} 
          fillterNoteByCateg={fillterNoteByCateg}
          ischecked={ischecked}
          checkedSet={checkedSet}
          windowswidth={windowswidth}
          searchfilter={searchfilter}
          addSearchFilter={addSearchFilter}
          />
        </div>
        <div className='note_container'>
            {arraylist.length===0  &&  "You have no notes"}
            <NoteComponent 
            arraylist={arraylist} 
            filtercateg={filtercateg} 
            completedNotesList={completedNotesList} 
            ischecked={ischecked}
            deleteNoteList={deleteNoteList}
            updateNoteList={updateNoteList}
            searchfilter={searchfilter}
            setArrayList={setArrayList}
            />
        </div>
        <div className='note-addbtn-container' >
            <IoAdd className='note-addbutton' onClick={()=>setAddBtn(true)}/>
        </div>
      </div>
      {addbtn && (
        <WritingComponent 
        closebtn={closeAddBtn} 
        addToArrayList={addToArrayList} 
         />
      )}
      
    </div>
  )
}

export default App
