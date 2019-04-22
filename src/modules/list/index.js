
import React, { PureComponent } from 'react';

import Week from '../week';
import './list.scss';


class List extends PureComponent {

  render() {

    const weeks = 6;

    return (
      <section className="calendar__list">
        {[...(new Array( weeks ))].map((a,i) =>
          <Week
            key={i}
            week={i}
          />
        )}
      </section>
    );
  }
}

export default List;
