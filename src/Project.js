import React, { Component } from 'react';
import logo from './logo.svg';

import Button from 'material-ui/Button';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <h5>One Project Here</h5>
        <Button raised color="primary">
          Hello Button
        </Button>
      </div>
    );
  }
}

export default Project;
