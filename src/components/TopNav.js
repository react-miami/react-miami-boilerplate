// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

// UI components.
import { Navbar, Nav, NavItem } from 'react-bootstrap';


// Define class.
class TopNav extends React.Component {

  // Render method.
  render() {
    const { basic } = this.props;

    return (
      <Navbar fluid inverse>
        <Navbar.Header>

          <Navbar.Brand>
            <Link to="/">
              {basic.sample || 'React Boilerplate'}
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>

            <LinkContainer to="/about">
              <NavItem eventKey={2}>About Us</NavItem>
            </LinkContainer>

            <LinkContainer to="/pokemon">
              <NavItem eventKey={3}>Pokemon</NavItem>
            </LinkContainer>

          </Nav>

          <Nav pullRight>

            <LinkContainer to="/contact">
              <NavItem eventKey={1}>Contact</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// PropTypes declaration.
TopNav.propTypes = {
  basic: React.PropTypes.object,
};

// Redux connect to props.
const mapStateToProps = (state) => ({
  basic: state.basic,
});

// Export.
export default connect(mapStateToProps)(TopNav);
