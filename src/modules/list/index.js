
import React, { PureComponent } from 'react';
import moment from 'moment';

import Week from '../week';
import './list.scss';


class List extends PureComponent {

  state = {
    now: moment(),
    month: moment().startOf('month')
  };

  render() {

    const weeks = 6;
    const {now, month} = this.state;

    return (
      <section className="calendar__list">
        {[...(new Array( weeks ))].map((a,i) =>
          <Week
            key={i}
            week={i}
            month={month}
            now={now}
          />
        )}
      </section>
    );
  }
}

export default List;
