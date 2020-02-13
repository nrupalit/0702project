import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount = () => {
        this.props.fetchPosts();
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
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);