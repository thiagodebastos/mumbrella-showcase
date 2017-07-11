import React from 'react'
import { Route, Switch } from 'react-router-dom'
import View from './components/View'

export default (
  <Switch>
    <Route exact path="/" component={View} />
    <Route
      path="/:section/:subsection"
      render={({ match }) =>
        <View
          currentSection={parseInt(match.params.section, 10)}
          currentSubsection={parseInt(match.params.subsection, 10)}
        />}
    />
  </Switch>
)
