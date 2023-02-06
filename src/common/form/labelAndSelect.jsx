import React from "react";
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className="ui ui-fluid dropdown">
            <label htmlFor={props.name}>{props.label}</label>
            <select {...props.input} className='form-control dropdown'
                placeholder={props.placeholder}
                readOnly={props.readOnly} type={props.type} onchange={props.onchange} multiple={props.multiple}>
                 {props.children}
            </select>
        </div>
    </Grid>
)