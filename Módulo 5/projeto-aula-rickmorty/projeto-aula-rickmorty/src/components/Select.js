import React, { Component } from'react';
import "./Select.css";

class Select extends Component {
    componentWillUnmount(){
        console.log("Will Unmount");
    }

    render(){
        const options=this.props.options;
        return <select className="select" onChange={(event) => this.props.handleChange(event.target.value)}>
            {options.map(number=>{
                return <option value={number} key={number}>{number}</option>
            })}
        </select>
    }
}

export default Select;