// Dependencies.
import React from 'react';

// Layout components.
import Main from '../../layouts/main';

// Utilities.
import utils from '../../utils';


// Define class.
class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    return (
      <Main>
        <h1>About Us</h1>
      </Main>
    );
  }
}

// Export.
export default AboutPage;
