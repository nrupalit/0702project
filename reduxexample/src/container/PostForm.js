import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postActions';
import { PropTypes } from "prop-types";

class PostForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        const posts = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(posts);
                 
        
    }
    render () {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Title:</label><br />
                    <input type='text' name='title' onChange={this.handleChange} value={this.state.title}  /><br /><hr />
                    <label>Body:</label><br />
                    <textarea name='body'onChange={this.handleChange} value={this.state.body}  /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const postcontainer = new PostForm();

PostForm.propTypes = {
    createPosts: PropTypes.func.isRequired,
    
}

export default connect(null , { createPosts })(PostForm);