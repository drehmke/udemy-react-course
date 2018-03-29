import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/navbar.css'

const navbar = (props) => {
  return(
    <div>
      <nav>
        <ul>
          <li><NavLink to="/Courses" replace title="Course list" id="Courses" className="">Course List</NavLink></li>
          <li><NavLink to="/Students" replace title="Students list" id="students" className="">Students List</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
