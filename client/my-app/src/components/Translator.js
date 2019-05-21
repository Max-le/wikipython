import React, { Component } from "react";
import InputWord from "./InputWord"
class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleSubmit(event){
    alert("Received : "+this.state.inputWord)
}
handleChange(event){
    this.setState({inputWord: event.target.value});
}

  componentDidMount() {
    fetch("http://localhost:5000/translate?word=complexity")
    .then((res) => {return res.json()}).then(((data) => this.setState({word: data})))

    }
  render() {
    if (this.state.word !== undefined && this.state.word !== ""){
      var aKey = Object.keys(this.state.word)[0]
      console.log("WORD : "+this.state.word)
      console.log("KEY : "+aKey)  
      var myWord = this.state.word[aKey]
      console.log(myWord[0].translation)

    return (
      <div>
        <h1>{myWord[0].translation}</h1>
        <h2>{aKey}</h2>
        <h3>Props : {this.props}</h3>

      </div>
    );
    }
    else return (
      <div>
            <div>
            <span>Enter the word to translate here : </span>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            );      
      </div>
    )
  }
}
 
export default Translator;
;