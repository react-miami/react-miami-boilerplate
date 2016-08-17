// Dependencies.
import React from 'react';

// UI components.
import { Glyphicon } from 'react-bootstrap';


// Define class.
class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Background color.
    const colors = [
      '#ff6c93',
      '#ff8a13',
      '#4cbb22',
      '#4CBBFC',
      '#EEEE22',
      '#ffc38a',
      '#fadc4a',
      '#4fc7ea',
      '#E3FFEE',
      '#80E56F',
      '#7fcbc9'
    ];

    // Get random number from colors array
    const random = Math.floor((Math.random() * colors.length));

    this.state = {
      randomColor: colors[random]
    };
  }

  // Render method.
  render() {
    const {
      random,
      color,
      borderColor,
      borderWidth,
      backgroundColor
    } = this.props;
    const { randomColor } = this.state;

    let contents;

    // Size.
    let { size } = this.props;

    let sizeStyle;
    if (size === 'xs') {
      sizeStyle = 16;
    } else if (size === 'sm') {
      sizeStyle = 24;
    } else if (size === 'md') {
      sizeStyle = 48;
    } else if (size === 'lg') {
      sizeStyle = 64;
    } else {
      sizeStyle = size || 32;
    }

    // Border.
    let { shape } = this.props;
    let radius;
    if (shape === 'square') {
      radius = 0;
    } else {
      radius = '50%';
    }

    let styles = {
      avatar: {
        position: 'relative',
        display: 'inline-block',
        width: sizeStyle || '30px',
        height: sizeStyle || '30px',
        overflow: 'hidden',
        textAlign: 'center',
        textTransform: 'capitalize',
        margin: '5px 3px 5px 0',
        backgroundColor: random ? randomColor : null || backgroundColor,
        borderWidth: borderWidth || 3,
        borderStyle: 'solid',
        borderColor: borderColor || 'rgba(0,0,0,.25)',
        borderRadius: radius || '50%',
        boxSizing: 'border-box',
        transition: 'all .5s ease',
        verticalAlign: 'middle',
      },

      img: {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: '100%',
        height: 'auto',
        borderRadius: radius,
      },

      icon: {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: '100%',
        fontSize: '16px',
        color: color ? color : 'inherit',
        // paddingTop: '5px',
      },

      initials: {
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        display: 'block',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 100,
        color: color ? color : 'inherit',
        transform: 'translateY(-50%)',
      }
    };

    // Icon.
    const icon = this.props.icon || '';
    if (icon.length >= 1) {
      contents = (<Glyphicon glyph={icon} style={styles.icon} className="fa-fw" />);
    }

    // Initials
    const name = this.props.name || '';
    let initials;
    if (name.length > 0) {
      // Get all initials from name prop
      const allInitials = name.split(' ').map( (s) => {
        return s.charAt(0);
      });
      // Join first and last initials
      initials = allInitials[0] + allInitials[allInitials.length - 1];
      contents = (
        <span className="avatar-initials" style={styles.initials}>
          {initials}
        </span>
      );
    }

    // Image.
    const imageSrc = this.props.src || '';
    if (imageSrc.length > 0) {
      contents = (<img src={imageSrc} style={styles.img} />);
    }


    // Status.
    const status = this.props.status || '';
    let classnames = 'avatar ' + status;


    return (
      <span className={classnames} style={styles.avatar}>
        {contents}
      </span>
    );
  }
}

// PropTypes declaration.
Avatar.propTypes = {
  status: React.PropTypes.string,
  shape: React.PropTypes.string,
  size: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  borderWidth: React.PropTypes.number,
  borderColor: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  src: React.PropTypes.string,
  icon: React.PropTypes.string,
  background: React.PropTypes.string,
  name: React.PropTypes.string,
  random: React.PropTypes.bool,
  color: React.PropTypes.string,
};

// Export.
export default Avatar;
