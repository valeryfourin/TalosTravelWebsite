import React from 'react';
import Helmet from 'react-helmet';
import { Button, Dropdown } from 'react-bootstrap';
import '../styles/GuestsCount.scss';
import {BsPerson} from 'react-icons/bs';
// import '../styles/VioletButton.scss';

export default class GuestsCount extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
  }

    incrementClick = (data) => (e) => {
        if (this.state.count === 10) { return; }
        else { this.setState({ count: this.state.count + 1 }); }
  };
    decrementClick = (data) => (e) => {
        if (this.state.count === 1) { return; }
        else { this.setState({ count: this.state.count - 1 }); }
  };

  render(){
    return (
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" className="mt-1 search-button" id="dropdown-basic">
          <BsPerson/> {this.state.count}
        </Dropdown.Toggle>
        <Dropdown.Menu className="guest-count-dropdown-content">
          <div className="d-flex flex-row dropdown-content">
            <p className="number-of-guests-text"  >Number of guests:</p>
            
            
            <Button className="operation-btn" onClick={this.decrementClick('data text')}><h6>-</h6></Button>
            <h6 className="m-2">{this.state.count}</h6>
            <Button className="operation-btn" onClick={this.incrementClick('data text')}><h6>+</h6></Button>
          </div>
          </Dropdown.Menu>
      <Helmet>
          <style>{`
          .guest-number-btn {
            height: 70px;
          }
          
          
`}</style>
        </Helmet>
      </Dropdown>
    )
  }
}