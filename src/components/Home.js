import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokeBall from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="post card" key={post.id}>
						<div className="card-content">
							<Link to={`/${post.id}`}>
								<img src={pokeBall} alt="poke ball "/>
								<span className="card-title red-text">{post.title}</span>
							</Link>
							<p>{post.body}</p>
						</div>
					</div>
				) 
			})
		) : (
			<p>No Posts found Yet</p>
		);
		return (
			<div className="home container">
			<h4 className="center">Posts</h4>		
				{postList}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}



export default connect(mapStateToProps)(Home);
