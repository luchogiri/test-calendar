
import React, { PureComponent, Fragment } from 'react';
import moment from 'moment';

import './day.scss';


class Day extends PureComponent {

  state = {
    date: undefined,
    isToday: false,
    isFirstDay: false,
    isWeekend: false,
    isSameMonth: false
  };


  componentDidMount() {

    const {now} = this.props;
    const date = this.getDate();

    this.setState({
      date,
      isToday: date.isSame( now, 'day'),
      isFirstDay: date.date() === 1,
      isWeekend: date.day() === 0 || date.day() === 6,
      isSameMonth: date.isSame( now, 'month'),
    });
  }

  getDate = () => {

    const {month, week, day} = this.props;
    return moment(month).add( week*7 + day - month.day(), 'days' );
  };

  getClass = () => {

    const {isToday, isWeekend, isSameMonth} = this.state;
    const classes = ['calendar__day'];
    isToday && classes.push('calendar__day--is-today');
    isWeekend && classes.push('calendar__day--is-weekend');
    !isSameMonth && classes.push('calendar__day--not-same-month');
    return classes;
  };

  render() {

    const { date, isFirstDay } = this.state;
    const classes = this.getClass();

    return (
      <article className={classes.join(' ')}>
        {date &&
        <Fragment>

          {date.date()}
          {isFirstDay && date.format('MMM')}

        </Fragment>}
      </article>
    );
  }
}

export default Day;
