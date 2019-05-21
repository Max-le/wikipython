import React, { Component } from "react";


class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {inputWord: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleSubmit(event){
        alert("Received : "+this.state.inputWord)
    }
    handleChange(event){
        this.setState({inputWord: event.target.value});
    }
    
    render() {
        
        return (
            <div>
            <span>Enter the word to translate here : </span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            );
        }
    }
    export default InputForm;
    