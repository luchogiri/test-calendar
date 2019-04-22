
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Store from '../reducers/store';
import Head from './head';
import List from './list';
import './index.scss';

class App extends PureComponent {
  render() {
    return (
      <Provider store={Store()}>
        <main className="calendar">
          <Head />
          <List />
        </main>
      </Provider>
    );
  }
}

export default App;
