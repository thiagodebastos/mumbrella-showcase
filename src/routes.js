import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ViewContainer from './containers/ViewContainer'

export default (
  <Switch>
    <Route exact path="/" component={ViewContainer} />
    <Route
      path="/:section/:subsection"
      render={({ match }, props) =>
        <ViewContainer
          currentSection={parseInt(match.params.section, 10)}
          currentSubsection={parseInt(match.params.subsection, 10)}
          {...props}
        />}
    />
  </Switch>
)
