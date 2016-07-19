// Dependencies.
import React from 'react';


// Define class.
class ComponentTemplate extends React.Component {

  // Render method.
  render() {
    const title = this.props.title;
    const message = this.props.message;

    return (
      <div>
        <Panel header={title} bsStyle="success">
          <p className="msg">{message}</p>
          <p>
            <Button bsStyle="success">Button</Button>
            <span> and </span>
            <Button>Another Button</Button>
          </p>
        </Panel>
      </div>
    );
  }
}

// PropTypes declaration.
ComponentTemplate.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string
};

// Export.
export default ComponentTemplate;
