import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import './Courses.css';

import Course from '../../containers/Course/Course'

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
                              <NavLink
                                to={{
                                  pathname: '/courses/course/' + course.id,
                                  search: '?title=' + course.title
                                }}
                                replace title={course.title}
                                key={course.id}
                                id={course.id}
                                activeClassName="active" className=""
                              >
                                <article className="Course" >{course.title}</article>
                              </NavLink>
                            )
                        } )
                    }
                </section>
                <Route path="/courses/course/:id" component={Course} exact strict sensitive />
            </div>
        );
    }
}

export default Courses;
