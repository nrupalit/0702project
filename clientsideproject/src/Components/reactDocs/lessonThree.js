import React, { Component } from 'react'
//lifiting up state
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <h1>Water is Boilng</h1>
    }
    else return <h1>Incress the water temp to boil water</h1>
}
export default class LessonThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
    }
    handlerChange = (e) => {
        this.setState({temperature: e.target.value})
    }
    render() {
        return (
            <fieldset>
                <legend>Enter Temp</legend>
                <input value={this.state.temperature} onChange={this.handlerChange} />
                <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
            </fieldset>
        )
    }
}
