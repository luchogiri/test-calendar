
import React, { PureComponent } from 'react';
import Head from './head';
import List from './list';
import './index.scss';

class App extends PureComponent {
  render() {
    return (
      <main className="calendar">
        <Head />
        <List />
      </main>
    );
  }
}

export default App;
