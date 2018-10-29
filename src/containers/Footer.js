import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Nav justified>
         <NavItem eventKey={1} href="/about">
           About Us
         </NavItem>
         <NavItem eventKey={2} href="/contact">
           Contact Us
         </NavItem>
       </Nav>
      </div>
    );
  }
}

export default Footer;
