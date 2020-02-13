import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';

class Posts extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }

    }

    render () {
        const postItem = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                {/* <Postform /> */}
                { postItem }
            </div>
        );
    }
}
Posts.PropsTypes = {
    fetchPosts: PropsTypes.func.isRequired,
    posts: PropsTypes.array.isRequired,
    newPost: PropsTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);