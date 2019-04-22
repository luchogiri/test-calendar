
import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Events from '../events';

import './day.scss';


class Day extends PureComponent {

  getDate = () => {

    const {configs, week, day} = this.props;
    return moment(configs.month).add( week*7 + day - configs.month.day(), 'days' );
  };

  getClass = date => {

    const {configs} = this.props;
    const isToday = date.isSame( configs.now, 'day');
    const isWeekend = date.day() === 0 || date.day() === 6;
    const isSameMonth = date.isSame( configs.month, 'month');

    const classes = ['calendar__day'];
    isToday && classes.push('calendar__day--is-today');
    isWeekend && classes.push('calendar__day--is-weekend');
    !isSameMonth && classes.push('calendar__day--not-same-month');
    return classes;
  };

  render() {

    const date = this.getDate();
    const isFirstDay = date.date() === 1;
    const classes = this.getClass(date);

    return (
      <article className={classes.join(' ')}>
        {date &&
        <Fragment>

          <header>
            <h1>{date.date()}</h1>

            {isFirstDay &&
            <h2>{date.format('MMM')}</h2>}
          </header>

          <Events date={date} />

        </Fragment>}
      </article>
    );
  }
}

export default connect(s => s)(Day);
