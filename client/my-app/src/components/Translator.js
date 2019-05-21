import React, { Component } from "react";
class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};
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

      </div>
    );
    }
    else return (
      <p id='results'>Waiting for results...</p>
    )
  }
}
 
export default Translator;
;