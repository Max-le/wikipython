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
    console.log(this.state.word['greeting'])

    return (
        <p>Translator</p>
    );
  }
}
export default Translator;
;