import React from 'react';

export const InputForm = props => {
    return(
        <div>
            <label>{props.val}</label><br />
            <input type={props.text} name={props.name} onChange={(e) => props.onChange(e)} value={props.value}  /><br /><hr />
            {/* <button>Submit</button> */}
        </div>
    );
}
export const HeaderForm = props => {
    return(
        <div>
            <h1>{props.heading}</h1>
        </div>
    );
}

export const FormVariable = props => {
    return(
        <form onSubmit={(e)=> props.onSubmit(e)}>
            <button>{props.buttonName}</button>
        </form>
    );
}
