import React from 'react'
import { Provider } from 'react-redux'
import { storiesOf } from '@kadira/storybook'
import { ConnectedRouter } from 'react-router-redux'
import { configureStore, history } from '../src/redux/store/configureStore'

import Logo from '../src/components/Logo'
import View from '../src/components/View'

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
  .add('Intro: Section 1', () => <View section={1} subsection={0} />)
  .add('Intro: Section 2', () => <View section={2} subsection={0} />)
  .add('Intro: Section 3', () => <View section={3} subsection={0} />)
  .add('Intro: Section 4', () => <View section={4} subsection={0} />)
