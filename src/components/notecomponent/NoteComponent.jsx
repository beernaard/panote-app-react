import React from 'react'
import './notecomponent.css'
import NoteContentComponent from './NoteContentComponent'
const NoteComponent = ({arraylist,
  filtercateg,
  completedNotesList,
  ischecked,
  deleteNoteList,
  updateNoteList,
  searchfilter
  }) => {
  const filtered = (arraylist, categ)=>{ 
    const fitleredarray = arraylist.filter(list=>list.category===categ)
    return (
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }
  const filteredCategCompleted = (arraylist, categ)=>{ 
    const fitleredarray = arraylist.filter(list=>list.category===categ&&list.completed===true)
    return (
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }
  const filteredCompleted = (arraylist)=>{
    console.log("abot")
    const fitleredarray = arraylist.filter(list=>list.completed===true)
    return (
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }

  const searchNotesList =(arraylist,searchfilter)=>{
    console.log("abot")
    const fitleredarray = arraylist.filter(list=>{
      return list.title.toLowerCase().includes(searchfilter.toLowerCase())
    })
    return(
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }
  const searchNotesListCompleted =(arraylist)=>{
    const fitleredarray = arraylist.filter(list=>{
      return list.title.toLowerCase().includes(searchfilter.toLowerCase()) &&list.completed===true
    })
    return(
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }
  const searchNotesListFiltered =(arraylist,searchfilter, categ)=>{
    const fitleredarray = arraylist.filter(list=>{
      return list.title.toLowerCase().includes(searchfilter.toLowerCase())&&list.category===categ})
    return(
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }
  const searchNotesListFilteredCompleted =(arraylist,searchfilter, categ)=>{
    const fitleredarray = arraylist.filter(list=>{
      return ((list.title.toLowerCase().includes(searchfilter.toLowerCase()) &&list.completed===true)&&list.category===categ)
    })
    return(
      fitleredarray.map(filterlist=>{
        return(
              <NoteContentComponent 
              filterlist={filterlist} 
              completedNotesList={completedNotesList}
              deleteNoteList={deleteNoteList}
              updateNoteList={updateNoteList}
              />
        )
      })
    )
  }
  return (
    <div className='note-list-container'>
      {((filtercateg ==="All")&& !ischecked)&&searchfilter ===""?
        arraylist.map(list=>{
          return(
                <NoteContentComponent 
                filterlist={list} 
                completedNotesList={completedNotesList}
                deleteNoteList={deleteNoteList}
                updateNoteList={updateNoteList}
                />
          )
        })
        :
        ((filtercateg ==="All")&& ischecked)&&searchfilter ===""?
        filteredCompleted(arraylist)
        :
        ((filtercateg !=="All")&& !ischecked)&&searchfilter ===""?
        filtered(arraylist, filtercateg, ischecked)
        :
        ((filtercateg !=="All")&& ischecked)&&searchfilter ===""?
        filteredCategCompleted(arraylist, filtercateg)
        :
        ((filtercateg ==="All")&& !ischecked)&&searchfilter !==""?
        searchNotesList(arraylist,searchfilter)
        :
        ((filtercateg ==="All")&& ischecked)&&searchfilter!==""?
        searchNotesListCompleted(arraylist,searchfilter)
        :
        ((filtercateg !=="All")&& !ischecked)&&searchfilter!==""?
        searchNotesListFiltered(arraylist,searchfilter,filtercateg)
        :
        ((filtercateg !=="All")&& ischecked)&&searchfilter!==""?
        searchNotesListFilteredCompleted(arraylist,searchfilter,filtercateg)
        :
        filtered(arraylist, filtercateg, ischecked)
      }
    </div>
  )
}

export default NoteComponent