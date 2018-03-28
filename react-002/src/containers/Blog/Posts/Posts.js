import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost';
//import { withRouter } from 'react-router-dom'
import { Route, NavLink } from 'react-router-dom'
import styles from './Posts.css'

class Posts extends Component {
  state = {
    posts: []
  }
  /* --- LifeCycle ---------------------- */
  componentDidMount() {
    this.getMultiplePosts(6)
  }

  /* ---- Mutators --------------------- */
  getMultiplePosts = (qty) => {
    axios.get('/posts')
      .then( (response) => {
        // console.log(response)
        const posts = response.data.slice(0,qty)
        const updatedPosts = posts.map( (post) => {
          return {
            ...post,
            author: 'Donna'
          }
        })
        this.setState({posts: updatedPosts})
      })
      .catch( (err) => {
        console.log(err)
        //this.setState({error: true})
      })

  }

  /* ---- Handlers ------------------- */
  getSinglePostHandler = (id) => {
    //this.setState({selectedPostId: id})
    this.props.history.push(this.props.match.url + '/' + id)
  }

  /* ---- Render --------------------- */
  render() {
    let posts = <p style={{textAlign: 'center', color: '#f00'}}>Something went wrong</p>
    if( !this.state.error ) {
      posts = this.state.posts.map( (post) => {
        return (
//          <NavLink to={'/post/' + post.id} key={post.id}>
            <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.getSinglePostHandler(post.id)}
           />
//          </NavLink>
        )
      })
    }

    return (
      <div>
        <section className="Posts">
            {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    )
  }
}

//export default withRouter(Posts)
export default Posts
