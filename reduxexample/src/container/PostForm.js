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
    render () {
        return (
            <div>
                <h1>Add Posts</h1>
                {/* <FormVariable onSubmit={(e)=> this.onSubmit(e)} buttonName='Submit'>
                    <InputForm val='Title:' type='text' name='title' onChange={(e)=> this.onChange(e)} value={this.state.title} />
                    <InputForm val='Body:' type='text' name='body' onChange={(e)=> this.onChange(e)} value={this.state.body} />
                </FormVariable> */}
                <form onSubmit={this.onSubmit}>
                    {/* <label>Title:</label><br /> */}
                    <InputForm val='Title:' type='text' name='title' onChange={(e)=> this.onChange(e)} value={this.state.title} />
                    {/* <input type='text' name='title' onChange={this.onChange} value={this.state.title}  /><br /><hr />
                    <label>Body:</label><br /> */}
                    <InputForm val='Body:' type='text' name='body' onChange={(e)=> this.onChange(e)} value={this.state.body} />
                    {/* <textarea name='body'onChange={this.onChange} value={this.state.body}  /><br /> */}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


PostForm.propTypes = {
    createPosts: PropTypes.func.isRequired,
    
}

export default connect(null , { createPosts })(PostForm);