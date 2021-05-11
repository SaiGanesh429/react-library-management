import React, { Component } from "react";
import './InputField.css';


class InputField extends Component {
    render() {
        return (
            <div>
                <div className="input-field">
                    <label>{this.props.labelName}</label>
                    <input type={this.props.inputType} onChange={this.props.changeEvent} value={this.props.value}></input>
                </div>
                {!this.props.isValid ?
                    <div className='error-message'>This field is required</div> : null
                }

            </div>

        )
    }
}


export default InputField;
