import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import styles from './Posts.css'

class Posts extends Component {
  state = {
    posts: []
  }
  /* --- LifeCycle ---------------------- */
  componentDidMount() {
      this.getMultiplePosts(12)
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
    this.setState({selectedPostId: id})
  }

  /* ---- Render --------------------- */
  render() {
    let posts = <p style={{textAlign: 'center', color: '#f00'}}>Something went wrong</p>
    if( !this.state.error ) {
      posts = this.state.posts.map( (post) => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.getSinglePostHandler(post.id)}
         />
      })
    }

    return (
      <section className="Posts">
          {posts}
      </section>
    )
  }
}

export default Posts
