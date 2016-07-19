// Dependencies.
import React from 'react';

// Ui components.
import { Grid, Row, Col } from 'react-bootstrap';
import TopNav from '../components/TopNav';

// Utilities.
import utils from '../utils';


// Define class.
class Layout extends React.Component {

  // Render method.
  render() {
    return (
      <Grid fluid>
        <TopNav />
        <Row>
          <Col sm={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node,
};

// Export.
export default Layout;
