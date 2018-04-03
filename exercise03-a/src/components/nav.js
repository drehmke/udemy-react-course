import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  state = {
    links: [
      { id: 0, text: 'Course List', url: '/courses'},
      { id: 1, text: 'Student List', url: '/students'}
    ]
  }



  render() {
    const navlinks = this.state.links.map( (link) => {
      return <NavLink to={link.url} replace title={link.text} key={link.id} id={link.id} activeClassName="active" className="">{link.text}</NavLink>
    })
    return(
      <nav>
        {navlinks}
      </nav>
    )
  }
}

export default Navbar
