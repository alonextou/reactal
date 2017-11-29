import React, { Component } from 'react';
import logo from './logo.svg';

import Button from 'material-ui/Button';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h3 class="header">Projects</h3>

        <Button raised color="primary">
          Push da button
        </Button>
      </div>
    );
  }
}

export default Projects;
