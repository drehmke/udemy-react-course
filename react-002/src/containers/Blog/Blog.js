import React, { Component } from 'react';
import axios from 'axios'
//import axios from '../../axios.js'

//
import Posts from './Posts/Posts'
//import FullPost from './FullPost/FullPost';
//import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    selectedPostId: null,
    error: false
  }


  render () {
      return (
          <div className="Blogs">
            <header>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Dynamic Post</a></li>
                  <li><a href="/">New Post</a></li>
                </ul>
              </nav>
            </header>
              <Posts />
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
