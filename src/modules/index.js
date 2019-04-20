
import React, { PureComponent, Fragment } from 'react';
import Head from './head';
import List from './list';

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head />
        <List />
      </Fragment>
    );
  }
}

export default App;
