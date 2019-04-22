
import React, { PureComponent } from 'react';

import Day from '../day';
import './week.scss';


class Week extends PureComponent {

  render() {

    const days = 7;
    const {week} = this.props;

    return (
      <section className="calendar__week">
        {[...(new Array( days ))].map((a,i) =>
          <Day
            key={i}
            day={i}
            week={week}
          />
        )}
      </section>
    );
  }
}

export default Week;
