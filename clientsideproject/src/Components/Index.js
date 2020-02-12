import React, { Component } from 'react';
import LessonOne from './reactDocs/lessonOne';


class Index extends Component {
    constructor(){
        super();
        this.state = {
            token: ''
        }
    }  
      
    render () {
        return (
            <div>
                <h1>hello world</h1>
                <LessonOne />
            </div>
        )
    }
}

export default Index