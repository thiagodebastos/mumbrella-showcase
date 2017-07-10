import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@kadira/storybook'
import { ConnectedRouter } from 'react-router-redux'
import { configureStore, history } from '../src/redux/store/configureStore'

import Logo from '../src/components/Logo/'
import Intro from '../src/components/Templates'

const store = configureStore()

storiesOf('Views', module)
  .addDecorator(getStory =>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {getStory()}
      </ConnectedRouter>
    </Provider>
  )
  .add('Logo', () => <Logo />)
  .add('Intro', () => <Intro />)
