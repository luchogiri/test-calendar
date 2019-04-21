
import React, { PureComponent } from 'react';
import moment from 'moment';

import './head.scss';


class Head extends PureComponent {

  render() {
    return (
      <header className="calendar__head">

        <section className="calendar__head__title">
          <h1>
            <strong>April</strong> 2019
          </h1>

          <nav>
            <div>&lt;</div>
            <div>Today</div>
            <div>&gt;</div>
          </nav>
        </section>

        <section className="calendar__head__days">
          {moment.weekdaysShort().map(i =>
            <h3 key={i}>{i}</h3>
          )}
        </section>

      </header>
    );
  }
}

export default Head;
