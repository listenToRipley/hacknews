import React, {Component} from 'react';


class ResultsView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props)
    const {title, author, created_at, url} = (this.props.listResults)
    return(
  
      <li>
        <a href={url}><h1>{title}</h1></a>
        <h4>Created by user:{author}</h4>
        <p>{created_at}</p>
      </li>

    )
  }
}

export default ResultsView;