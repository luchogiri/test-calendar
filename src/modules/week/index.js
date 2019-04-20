
import React, { PureComponent } from 'react';

import Day from '../day';
import './week.scss';


class Week extends PureComponent {

  render() {
    return (
      <section className="calendar__week">
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
      </section>
    );
  }
}

export default Week;
