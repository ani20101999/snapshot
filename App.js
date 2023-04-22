import React, { useState } from 'react';
import {Routes,Route,useNavigate} from "react-router-dom"
import { Mountain } from './mountain';
import { Beaches } from './beaches';
import { Birds } from './birds';
import { Food } from './food';
import {Navbar} from "./navbar"
import { Invalidpage } from './Invalidpage';
import './App.css';

function App() {
 
  const navigate = useNavigate()
  const [search,setSearch] = useState("");

  function findKeywords(e){
   setSearch(e.target.value);
  }

function searchCategory(){
  console.log(search)
  if(search=="mountain"){
    navigate("/")
  }
  else if(search=="beaches"){
    navigate("/beaches")
  }
  else if(search=="birds"){
    navigate("/birds")
  }
  else if(search=="food"){
    navigate("/food")
  }
}

  return (
  <>
  <h1 className='heading'>SnapShot</h1>
  <div className='search'>
   <input type='text'
   name="searchbox" 
   placeholder='search your category'
   value={search}
   onChange={findKeywords}
   />
   <button type="button" className='btn' onClick={searchCategory}>Search</button>
   </div>
    <div className="navbar">
    
        <Navbar/>
        <div className='span'>
        <span>{`${search} Pictures`}</span>
        </div>
        <Routes>
         <Route path='/' element={<Mountain/>}></Route>
         <Route path='/beaches' element={<Beaches/>}></Route>
         <Route path='/birds' element={<Birds/>}></Route>
         <Route path='/food' element={<Food/>}></Route>
         <Route path='*' element={<Invalidpage/>}></Route>
        </Routes>
       
    </div>
    
    </>
  );
}

export default App;
