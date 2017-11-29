import React from 'react'
import { Switch } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import Header from './Header'
import Projects from './Projects'
import Project from './Project'
import Missing from './Missing'

const Routes = props => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path ="/" component={App} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:project" component={Project} />
        <Route component={Missing} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Routes;
