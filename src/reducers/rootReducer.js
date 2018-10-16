const initState = {
	posts: [
		{id: 1, title: 'first post', body: 'first post body'},
		{id: 2, title: 'second post', body: 'second post body'},
		{id: 3, title: 'third post', body: 'third post body'}
	]
}

const rootReducer = (state = initState, action) => {
	console.log(action)
	if(action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter(post => {
			return action.id !== post.id
		})
		return {
			...state,
			posts: newPosts
		}
	}
	return state;
}

export default rootReducer