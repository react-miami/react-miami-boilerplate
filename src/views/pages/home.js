// Dependencies.
import React from 'react';

// Layout components.
import Main from '../../layouts/main';

// Utilities.
import utils from '../../utils';


// Define class.
class Homepage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    return (
      <Main>
        <h1>Homepage</h1>
      </Main>
    );
  }
}

// Export.
export default Homepage;
