import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";


class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            formValue: {
                usernameEmail: "",
                password: ""
            },
            error: "",
            token:""
        }
    }
    inputChangeHandler = (e) => {
        let formValue = {...this.state.formValue};
        formValue[e.target.name] = e.target.value;
        this.setState({
            formValue
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { usernameEmail, password } = this.state.formValue;

            const API = axios.create({
                baseURL: 'https://api.yeteh.com/login',
                headers: ({'content-type': 'application/json', 'module':'User'})
            })
            API.post('',{usernameEmail, password})
            .then((res) => {
                if (res.status === 200){
                    this.setState({token: res.data.data.token})
                    console.log("data", res);
                    this.setState({error: res.data.data.token});
                    this.props.history.push('/');
                }
                
            })
            .catch((err) => {
                if (err.message === "Request failed with status code 401"){
                    this.setState({error: "fail"});
                }
                
            })
        }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="usernameEmail" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formValue.usernameEmail} />
                    <input type="text" name="password" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formValue.password} />
                    <button type="submit" >Submit</button>
                    {this.state.error}
                </form>
            </div>
        )
    }
    
}


export default withRouter(LoginPage)