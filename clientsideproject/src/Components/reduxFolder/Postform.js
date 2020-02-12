import React, { Component } from 'react'

class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            data: ''
        }
    }
    onChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]})
    }
    onSubmit =(e) =>{
        e.preventDefault();
        const posts = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data:data})
        })
    }
    render () {
        return (
            <div>
                <h3>Add Post</h3>
                <form onSubmit={this.onSubmit}> 
                    <div>
                        <label>
                            title:
                        </label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div>
                        <label>
                            Body:
                        </label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <hr />
                    <button type="submit">Submit</button>
                </form>
                {this.state.data}
            </div>
        )
    }
}

export default Postform