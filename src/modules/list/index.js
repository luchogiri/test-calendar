
import React, { PureComponent } from 'react';

import Week from '../week';
import './list.scss';


class List extends PureComponent {

  render() {
    return (
      <section className="calendar__list">
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </section>
    );
  }
}

export default List;
