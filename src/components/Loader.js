// Dependencies.
import React from 'react';


// Define class.
class Loader extends React.Component {

  // Render method.
  render() {
    const { theme, padding, size } = this.props;

    let color;
    switch (theme) {
    case 'dark':
      color = '#000000';
      break;
    default:
      color = '#FFFFFF';
    }

    const styles = {
      base: {
        textAlign: 'center',
        margin: padding
      },

      spinner: {
        width: size,
        height: size,
      },

      circle: {
        backgroundColor: color,
      },
    };

    return (
      <div style={styles.base}>
        <div className="spinner--loader" style={styles.spinner}>
          <div className="spinner--loader--circle_1" style={styles.circle} />
          <div className="spinner--loader--circle_2" style={styles.circle} />
        </div>
      </div>
    );
  }
}

// PropTypes declaration.
Loader.propTypes = {
  padding: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  size: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  theme: React.PropTypes.oneOf(['light', 'dark'])
};

// PropTypes defaults.
Loader.defaultProps = {
  padding: 40,
  size: 50,
  theme: 'light',
};

// Export.
export default Loader;
