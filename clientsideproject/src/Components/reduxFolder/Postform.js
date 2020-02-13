import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../../actions/postAction';

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
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        //Call action
        this.props.createPost(post);
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
Postform.prototypes = {
    createPost : PropTypes.func.isRequired
};
export default connect(null, { createPost })(Postform)