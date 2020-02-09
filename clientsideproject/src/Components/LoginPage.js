import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Alert, Form, Button, ButtonToolbar , InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/loginpage.css';
import { Card, Input } from 'antd';
import "antd/dist/antd.css";



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
                    this.setState({error: "Please Try again"});
                }
                
            })
        }

    render() {
        return (
            <div>
                {(()=>{
                    if (this.state.error === ""){
                        return(
                            <div></div>
                        )
                    }
                    else{
                        return(
                            <Alert variant="danger">
                                <Alert.Heading>{this.state.error}</Alert.Heading>
                           </Alert>
                        )
                    }
                })()}
                <Card style={{margin:'auto' , width: '50rem', height:'30rem', top:'5rem'}}>
                        <Form onSubmit={this.onSubmit} className="formDesign" >
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email Adress</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control aria-describedby="inputGroupPrepend" type="email" placeholder="Enter email" name="usernameEmail" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formValue.usernameEmail} />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepends" style={{paddingLeft:'15px'}}>#</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control aria-describedby="inputGroupPrepends" type="password" placeholder="Password" name="password" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formValue.password} />
                                </InputGroup>
                            </Form.Group>
                            <ButtonToolbar>
                                <Button type="submit" variant="outline-secondary">Submit</Button>
                            </ButtonToolbar>
                        </Form>
                </Card>
                {/* <form onSubmit={this.onSubmit}>
                    <input type="text" name="usernameEmail" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formValue.usernameEmail} />
                    <input type="text" name="password" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formValue.password} />
                    <button type="submit" >Submit</button>
                </form> */}
            </div>
        )
    }
    
}


export default withRouter(LoginPage)