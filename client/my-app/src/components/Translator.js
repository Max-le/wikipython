import React, { Component } from "react";
class Translator extends Component { 
  constructor(props) {
    super(props);
    this.state = {wordInput: "query", word_data:[], targetLang: "French", requestCompleted: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this); 
  }
  handleSubmit(event){
    //TO-DO :  CHANGE REDUX STATE
    event.preventDefault(); // This prevents the form from refreshing the page
    console.log('Handle submit event triggered.')
    console.log("IN HANDLE SUBMIT EVENT :")
    console.log(this.state)
    console.log("Fetching...")
    const url = "http://localhost:5000/translate?word="+this.state.wordInput+"&lang="+this.state.targetLang
    fetch(url)
    .then((res) => {return res.json()}).then(((data) => this.setState({word_data: data, requestCompleted:true})))
    console.log(this.state)
    console.log( "URL : "+url)
    
  }
  handleChange(event){
    console.log('Handle submit event triggered.')
    this.setState({wordInput: event.target.value})
    console.log(this.state.wordInput)
    
  }
  render() {
    if (this.state.requestCompleted === true ){
      console.log(this.state.wordInput)
      const keys = Object.keys(this.state.word_data)
      console.log(keys)
      console.log(this.state.word_data[keys[0]])
      keys.forEach(key => { console.log(this.state.word_data[key][0].translation)
        
      });
      const listKeys = keys.map((key, index)=> <p key={index}>{key} : {this.state.word_data[key][0].translation}</p>)
      return (    <div>{listKeys}</div>)
        }
        else return (
          <div>
          <span>Enter the word to translate here : </span>
          <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.wordInput} onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
          </form>
          </div>
          );
        }
        
      }
      
      export default Translator;
      ;