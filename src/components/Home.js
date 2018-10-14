import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import pokeBall from '../pokeball.png'

class Home extends Component{
	state = {
		posts: []
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => { 
				console.log(res)
				this.setState({
					posts: res.data.slice(0, 10)
				})
			})
	}
	render() {
		const { posts } = this.state;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="post card" key={post.id}>
						<div className="card-content">
							<Link to={`/${post.id}`}>
								<img src={pokeBall} alt="poke ball image"/>
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
export default Home;
