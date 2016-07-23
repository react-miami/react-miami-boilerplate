// Dependencies.
import React from 'react';
import { Link } from 'react-router';

// Layout components.
import Main from '../../layouts/main';

// Utilities.
import utils from '../../utils';


// Define class.
class PageNotFound extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    const styles = {
      base: {
        width: '40%',
        minWidth: 300,
        margin: '50px auto',
      },

      title: {
        fontSize: '1000%',
        marginBottom: -20,
      },
    };

    return (
      <Main>
        <div className="text-center" style={styles.base}>
          <h1 style={styles.title}>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, but the page you are looking for has not been found.</p>
          <p>
            <Link to="/">Click here to start again from the beginning.</Link>
          </p>
        </div>
      </Main>
    );
  }
}

// Export.
export default PageNotFound;
