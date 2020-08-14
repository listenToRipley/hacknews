import React, {Component} from 'react';
import './App.css';
import ResultsView from './ResultsView'

class HackNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      author:'',
      results: []
    }
  }

  // componentDidMount() {
  //   fetch("http://hn.algolia.com/api/v1/search?query=")
  //   .then((res) => res.json())
  //   .then((data) => 
  //     console.log(data))
  // }

  //for searching dates new Date().toISOString()

  //clicking the button
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this is the submit',this.state.value)

   // console.log(this.state)
   fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.value}`)
   .then((res) => res.json())
   .then((data) => 
    this.setState({
      results: data.hits
  }))
    console.log('results',this.state)
  }

  //onChange
  handleChange = (e) => {
    console.log('this the change',this.state.value)
    this.setState({
      value: e.target.value
    })
  }

  aHandleSubmit = (e) => {
    e.preventDefault();
    console.log('this is the submit',this.state.author)

   // console.log(this.state)
   fetch(`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.author}`)
   .then((res) => res.json())
   .then((data) => 
    this.setState({
      results: data.hits
  }))
    console.log('results',this.state)
  }

  //onChange
  aHandleChange = (e) => {
    console.log('this the change',this.state.author)
    this.setState({
      author: e.target.value
    })
  }

  render() {
    let mapResults = this.state.results.map((result) => {
      return <ResultsView key={result.objectID} listResults={result}/>
      
    })

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>General Search 
          <input onChange={this.handleChange} value={this.state.value} type="text" placeholder="general search"/> 
        </label>
        <input type="submit"/>
        </form>
        <br/>
        <form onSubmit={this.aHandleSubmit}>
        <label>Search by Author 
          <input onChange={this.aHandleChange} value={this.state.author} type="text" placeholder="author"/> 
        </label>
        <input type="submit"/>
      </form>
        <ul>
          {mapResults}
        </ul>
      </div>
    )
  }
}
export default HackNews;
