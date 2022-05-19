import React from "react";
import "./style.css";
import Logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Counter from './components/Counter';
import Employee from './components/Employee';
import UserList from './components/UserList'
export default function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route path={'/'} element={<Home/>}/>
       <Route path={'/counter'} element={<Counter/>}/>
       <Route path={'/employee'} element={<Employee/>}/>
       <Route path={'/userList'} element={<UserList/>}/>
      </Routes>
      
    </div>
  );
}


