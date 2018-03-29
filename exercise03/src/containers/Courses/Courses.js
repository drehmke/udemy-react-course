import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
// Router Imports
import Course from '../Course/Course'

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return(
                              <NavLink to={{
                                pathname: this.props.match.url + '/course/' + course.id,
                                search: '?title=' + course.title
                              }} replace title={course.title} id={course.id} key={course.id} className="">
                                <article className="Course" key={course.id}>{course.title}</article>
                              </NavLink>
                            )
                        } )
                    }
                </section>

                <Route path={this.props.match.url + '/course/:id'} component={Course} />
            </div>
        );
    }
}

export default Courses
