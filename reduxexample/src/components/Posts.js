import React, { Component } from 'react'

class Posts extends Component {
    constructor(){
        super();
        this.state = {
            data:''
        }
    }
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => 
                console.log(data[0])
                
                // const post = data.map((val)=>
                //     <ul>
                //         <li key={val.toString()}>{val}</li>
                //     </ul>
                // )
                // this.setState({data: post})
                )
    } 
    render () {
        return (
            <div>
                hello world
                {this.state.data}
                
            </div>
        )
    }
}

export default Posts