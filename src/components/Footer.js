// Dependencies.
import React from 'react';
import { connect } from 'react-redux';


// Define class.
class Footer extends React.Component {

  // Render method.
  render() {
    const { basic } = this.props;

    return (
      <footer className="text-center">
        <hr/>
        <p>
          &copy; 2016 {basic.sample || 'React Boilerplate'}.
          {' '}
          All rights reserved.
        </p>
      </footer>
    );
  }
}

// PropTypes declaration.
Footer.propTypes = {
  basic: React.PropTypes.object,
};

// Redux connect to props.
const mapStateToProps = (state) => ({
  basic: state.basic,
});

// Export.
export default connect(mapStateToProps)(Footer);
