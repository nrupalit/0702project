import React, { Component } from 'react'

function WaringPop(props){
    if (!props.warn){
        return null
    }
    return (
        <div>
          Warning!
        </div>
      );
}

export default class LessonTwo extends Component {
    constructor(){
        super()
        this.state = {
            showWaring: true,
            list: ['react', 'react-redux', 'react-router'],
            posts : [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                {id: 2, title: 'Installation', content: 'You can install React from npm.'}
            ]
        }
    }
    ListItem = (props) =>{
        return <li>{props.value}</li>;
    }
    NumberList = (props) => {
        // const numbers = props.numbers;
        // const listItem = numbers.map((number)=>
        //     <this.ListItem key={number.toString()} value={number} />
        // )
        return (
            // <ul>{listItem}</ul>
            <ul>
                {props.data.map((number) =>
                    <this.ListItem key={number.toString()} value={number} />
                )}
            </ul>
        );
    }
    
    handleClick = () =>{
        this.setState(state =>({
            showWaring: !state.showWaring
        }));
    }

    Blog = (props) =>{
        // const sidebar = (
        //     <ul>
        //         {props.posts.map((post)=>
        //             <li key={post.id}>{post.title}</li>
        //         )}
        //     </ul>
        // );
        const content = props.posts.map((post) =>
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            </div>
        );
        return (
            <div>
                {/* {sidebar} */}
                <hr />
                {content}
            </div>
        )
    }
    render() {
        return (
            <div>
                
                <WaringPop warn= {this.state.showWaring} />
                <button onClick={this.handleClick}>
                    {this.state.showWaring ? 'Hide': 'Show'}
                </button>
                <this.NumberList data={this.state.list} />
                <this.Blog posts={this.state.posts} />
            </div>
        )
    }
}
