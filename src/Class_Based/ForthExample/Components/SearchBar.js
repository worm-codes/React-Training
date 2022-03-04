import React, { Component } from 'react'
import FourthSample from '../FourthSample';


export default class SearchBar extends Component {
  state={term:''}
  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmitSearch(this.state.term)


  }
  
  render() {
     
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
        <input type="text" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}} placeholder='Search' />
        </div>
        
        </form>
      </div>
    )
  }
}
