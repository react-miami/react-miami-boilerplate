// Dependencies.
import React from 'react';
import { connect } from 'react-redux';

// Layout components.
import Main from '../../layouts/main';

// UI components.
import { Button } from 'react-bootstrap';

// Utilities.
import utils from '../../utils';

// Redux actions.
import { setSample } from '../../redux/actions/basic-actions';


// Define class.
class Homepage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  handleBasicDispatch(val) {
    const { dispatch } = this.props;
    dispatch(setSample(val));
  }

  // Render method.
  render() {
    return (
      <Main>
        <h1>Homepage</h1>
        <br/>

        <Button bsStyle="warning" onClick={this.handleBasicDispatch.bind(this, 'Pancakes')}>
          Pancakes
        </Button>

        <Button bsStyle="danger" onClick={this.handleBasicDispatch.bind(this, 'Bacon')}>
          Bacon
        </Button>

        <Button bsStyle="primary" onClick={this.handleBasicDispatch.bind(this, 'Blueberry Muffins')}>
          Blueberry Muffins
        </Button>

        <Button bsStyle="default" onClick={this.handleBasicDispatch.bind(this, null)}>
          Reset
        </Button>

      </Main>
    );
  }
}

// PropTypes declaration.
Homepage.propTypes = {
  dispatch: React.PropTypes.func,
};

// Redux connect to props.
const mapDispatchToProps = (dispatch) => ({
  dispatch
});

// Export.
export default connect(mapDispatchToProps)(Homepage);
