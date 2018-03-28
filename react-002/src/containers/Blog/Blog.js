import React, { Component } from 'react';
import axios from 'axios'
//import axios from '../../axios.js'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

//
import Posts from './Posts/Posts'
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import './Blog.css';

// Lazy Loaded / Code Split Components
import asyncComponent from '../../components/hoc/asyncComponent'
const AsyncNewPost = asyncComponent( () => {
  return import('./NewPost/NewPost')
} )


class Blog extends Component {
  state = {
    selectedPostId: null,
    error: false,
    auth: true
  }


  render () {
      return (
          <div className="Blogs">
            <header>
              <nav>
                <ul>
                  <li><NavLink
                    to="/posts"
                    exact
                    activeClassName='myActive'
                    activeStyle={{
                      color: '#fa923f',
                      textDecoration: 'underline'
                    }}
                  >Posts</NavLink></li> {/* absolute */}
                  <li><NavLink to={{
                    //pathname: this.props.match.url + '/new-post', // relative
                    pathname: '/new-post',
                    hash: '#random',
                    search: '?quick-submit=true'
                  }}>New Post</NavLink></li>
                </ul>
              </nav>
            </header>
              <Switch>
                {/* this.state.auth ? <Route path="/new-post" component={NewPost} /> : null */}
                {/* Lazy Loading asynchronously */}
                { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                <Route path="/posts" component={Posts} />
                {/*<Route path="/posts" component={Posts} />*/}
                {/*
                  the above Route is valid - you can have multiple routes that
                  show the same component. However Redirect, as shown below, is
                  more elegant.
                 */}
                {/* <Redirect from="/" to="/posts" /> */}
                {/* This handles 404, or anything not handled prior to hitting this */}
                {/* This does not work with <Redirect from="/", as "/" will catch everything */}
                <Route render={ () => <h1> File Not Found </h1> } />
              </Switch>
              {/* Used outside the Switch, you can not set the from attribute */}
              {/*<Redirect to="/posts" />*/}
              {/*<Posts />*/}
              {/*
              <section>
                  <FullPost id={this.state.selectedPostId} />
              </section>
              <section>
                  <NewPost />
              </section>
              */}
          </div>
      );
  }
}

export default Blog;
