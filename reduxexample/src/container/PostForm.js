import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postActions';
import { PropTypes } from "prop-types";
import { InputForm } from '../components/ComponentPostForm'

class PostForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: '',
        }
    }
    onChange = (e) =>{
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
    FormPost = () => {
        return(
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <InputForm val='Title:' type='text' name='title' onChange={(e)=> this.onChange(e)} value={this.state.title} />
                    <InputForm val='Body:' type='text' name='body' onChange={(e)=> this.onChange(e)} value={this.state.body} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
    render () {
        return (
            <this.FormPost />
        )
    }
}


PostForm.propTypes = {
    createPosts: PropTypes.func.isRequired,
    
}

export default connect(null , { createPosts })(PostForm);