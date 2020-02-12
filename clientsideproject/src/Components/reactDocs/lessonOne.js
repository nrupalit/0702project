import React, { Component } from 'react'

export default class LessonOne extends Component {
    constructor(){
        super()
        this.state = {
            isLoginIn: false,
            meassage : ['react', 'react-redux', 'react-router']
        }
    }
    functionUser(user){
        return user.name + ' ' + user.lname + ' '
    }
    otherUser(user){
        if(user){
        return <h1>{this.functionUser(user)}!</h1>
        }
        return <h1>user is undefine</h1>
    }
    //Conditional Rendering
    UserLogin = () => {
        return <h1>hello youre loged in</h1>
    }
    UserLogOut = () => {
        return <h1>please login</h1>
    }
    //button for login logout
    LoginButton(props){
        return (
            <button onClick={props.onClick}>
                Login
            </button>
        )
    }
    handleLoginIn = () =>{
        this.setState({isLoginIn:true})
        
    }
    
    handleLoginOut = () =>{
        this.setState({isLoginIn:false})
    }
    LoginOutButton = (props) =>{
        return (
            <button onClick={props.onClick}>
                Log out
            </button>
        )
    }
    ConditionalRendering = (props) => {
        const isLoginIn = props.isLoginIn;
        if(isLoginIn){
            return(
                <div>
                    <this.LoginOutButton onClick={this.handleLoginOut} />
                    <this.UserLogin />
                </div>
            )
        }
        else return (
            <div>
                <this.LoginButton onClick={this.handleLoginIn} />
                <this.UserLogOut />
            </div>

            )
    }

    //Inline Logical Oprator
    MailBox = (props) => {
        const unreadMessage = props.unreadMessage;
        // const messages = this.state.message;
        const messages = unreadMessage.map((meg)=>
            <li key={meg.toString()}>{meg}</li>
        )
        //or use Index
        // const messages = unreadMessage.map((meg, index)=>
        //     <li key={index}>{meg}</li>
        // )
        return(
            <div>
                <h1>Hello!</h1>
                {unreadMessage.length > 0 &&
                    <h2>
                        You have {unreadMessage.length} unread message.<br />
                        and the message is
                        <ul>{messages}</ul>
                    </h2>
                }
            </div>
        )
    }

    render() {
        const user = {
            name: 'something',
            lname: 'something again'
        }
        const isLoginIn = this.state.isLoginIn;
        return (
            <div>
                <this.functionUser name={user.name} lname={user.lname} />
                <this.functionUser name="diff" lname="again" />
                <this.functionUser name="again calling" lname="something" />
                {this.otherUser(user)}
                {this.otherUser()}
                <this.ConditionalRendering isLoginIn ={this.state.isLoginIn} />
                <this.MailBox unreadMessage={ this.state.meassage } />
                {/* inline oprator */}
                {/* The user is <b>{isLoginIn? 'current': 'not'}</b> Login */}
                {isLoginIn ? (
                    <this.LoginOutButton onClick= {this.handleLoginOut} />
                ):(
                    <this.LoginButton onClick = {this.handleLoginIn} />
                )}
            </div>
        )
    }
}
