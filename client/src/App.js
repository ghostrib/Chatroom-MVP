import React, { Component } from 'react';
import Select from './components/Select'
import Login from './components/Login'
import Form from './components/Form'
import './App.css';

class App extends Component {
  state = {
    post: '',
    messages: [],
    translatedText: [],
    language: 'es',
    loggedIn: false,
    selectedOption: null
  };


  handleSubmit = async e => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: this.state.post }),
    }
    const response = await fetch('/api/messages', options);
    const body = await response.text();
    await this.translate(body)
    this.setState({
      messages: this.state.messages.concat(body),
      post: ''
    })
    this.clearInput();
  };

  setScrollHeight = () => {
    const container = document.getElementById("container");
    container.scrollTop = container.scrollHeight;
  }

  translate = str => {
    const address = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
    const key = '&key=trnsl.1.1.20180314T143847Z.44a504d0e79207e8.9e99a9d44438f493ea6c8990f329f29281166396&lang=' + this.state.language;
    const text = '&text=' + encodeURI(str);
    const url = address + key + text;
    str.length && fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        translatedText: this.state.translatedText.concat(result.text[0])
      }))
      .then(() => this.setScrollHeight())
      .catch(error => console.log('ERROR in translate', error));
  }

  clearInput = () => document.getElementById('text-input').value = ''

  handleChange = e => this.setState({ post: e.target.value })

  handleLanguageChange = () => {
    const value = document.getElementById('language-select').value;
    this.setState({ language: value })
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn || <Login />}

        <div id='container'>
          <div id='transbox'>
            {
              this.state.messages.length > 0 &&
              this.state.translatedText.map((msg, i) => {
                return (
                  <div className='messages' key={i}>
                    <span className='username'>matt:</span>
                    {msg}
                  </div>
                )
              })
            }
          </div>
        </div>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Select handleLanguageChange={this.handleLanguageChange} />
      </div>
    );
  }
}
export default App;

