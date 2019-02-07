import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import './Header.css';

class Header extends Component {
  
  handleSearch = (e) => {
    e.preventDefault();
    console.log(this._inputElement.value)
    if (this._inputElement.value !=="") {
      this.props.onSubmitSearch(this._inputElement.value)
      console.log(this._inputElement.value)
    }
    this._inputElement.value ="";
  }
  

  render(props) {
    return(
      <div>
        <Segment raised>
          <h2>Weather Finder</h2>
          <form onSubmit={this.handleSearch}>
            <div className="ui input focus">
              <input placeholder="Search" ref={(a) => this._inputElement = a}/>
              <Button primary type="submit">Search</Button>
            </div>
            
          </form>

        </Segment>
      </div>
    )
  }
}

export default Header;