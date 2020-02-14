import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import { ContainerPost } from '../components/ComponentPost';


class Posts extends Component {
    UNSAFE_componentWillMount = () => {
        this.props.fetchPosts();
    }
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }

    }
    MapData = (props) =>{
        const postItems = props.val.map((post)=>
                <div key={post.id}>
                    <div>{post.id}</div>
                    <h3>{post.title}</h3>
                    {post.body}
                </div>
        );
        return (
            <div>{postItems}</div>
        );
    }
    render () {
        return (
            <div>
                <this.MapData val={this.props.posts} />
            </div>
        )
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.postReducer.items,
    newPost: state.postReducer.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);