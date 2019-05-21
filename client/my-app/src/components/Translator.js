import React, { Component } from "react";

class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};
  }
  componentDidMount() {
    fetch("http://localhost:5000/translate?word=hello")
    .then((res) => {return res.json()}).then(((data) => this.setState({word: data})))

    }
  render() {

 
    Object.keys(this.state.word).forEach(aKey => {
      console.log("KEY : "+aKey)
      console.log(this.state.word[aKey])
    });
    console.log(this.state.word)

    return (
        <p>Translator</p>
    );
  }
}
export default Translator;
;