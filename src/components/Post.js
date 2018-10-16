import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios'

class Post extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  render() {
    // console.log(this.props)
    const post = this.props.post ? (
      <div className="card">
        <div className="card-content">
          <h4 className="center">{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button className="btn red" onClick={this.deletePost}>
              Delete Post
            </button>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
    return (
      <div className="container">
          {post}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  }
}

// Delete a post
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);