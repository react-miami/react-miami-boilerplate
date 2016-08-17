// Dependencies.
import React from 'react';


// Define class.
class App extends React.Component {
  render() {
    // Render method.
    return this.props.children;
  }
}

// PropTypes declaration.
App.propTypes = {
  children: React.PropTypes.node
};

// Export.
export default App;
