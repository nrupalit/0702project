import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import "antd/dist/antd.css";

export default class AntDTry extends Component {
    render() {
        return (
            <div>
                <Form className='login-form'>
                    <Form.Item>
                        <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username" />
                    </Form.Item>
                    <Button type="primary" shape="circle" icon="search">
                        Log in
                    </Button>
                </Form>
            </div>
        )
    }
}
