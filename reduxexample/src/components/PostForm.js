import React, { Component } from 'react';

class PostForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: ''
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            })
        })
         .then(res => res.json())
         .then(data => console.log(data));
                 
        
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

export default PostForm