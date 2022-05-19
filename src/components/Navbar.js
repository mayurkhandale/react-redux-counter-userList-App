import React from 'react';
import {Link} from 'react-router-dom';
import './comman.css'
const Navbar=()=>{
  return(
   <>
     <ul className="ul-nav">
        <li className="ul-li-nav"> <Link to={'/'}> Home </Link></li>
        <li className="ul-li-nav"><Link to={'/counter'}>Counter </Link></li>
        <li className="ul-li-nav"><Link to={'/employee'}> Employee</Link></li>
        <li className="ul-li-nav"><Link to={'/userList'}> UserList</Link> </li>
     </ul>
   </>
  )
}

export default Navbar