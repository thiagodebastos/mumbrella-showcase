// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from '../components/App'

type Props = {
  store: Object,
  history: Object
}

export default function Root(props: Props) {
  const { store, history } = props
  return (
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <Route path="/" component={App} />
        </ConnectedRouter>
      </div>
    </Provider>
  )
}
