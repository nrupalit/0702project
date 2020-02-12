import React, { Component } from 'react';
import Postform from './Postform';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/PostAction';

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    render () {
        const postItem = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <Postform />
                { postItem }
            </div>
        )
    }
}

export default connect(null,{ fetchPosts })(Posts);