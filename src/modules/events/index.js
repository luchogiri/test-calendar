
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Configs from '../../actions/configs';

import './events.scss';


const dispatchProps = dispatch => ({

  createEvent: date => () => dispatch( Configs.ShowModal(date) ),
  updateEvent: (date, event) => () => dispatch( Configs.ShowModal(date, event) )
});


class Events extends PureComponent {

  render() {

    const {date, items = [], createEvent, updateEvent} = this.props;
    const data = items.filter( i => date.isSame(i.date, 'day'));

    return (
      <section className="calendar__events">
        {data.map(i =>
          <div
            key={i.id}
            className={`col-${i.color.substr(1).toUpperCase()}`}
            onClick={updateEvent(date, i.id)}>
            <span style={{color: i.color}}>&#9679;</span>&nbsp;
            {i.name}
          </div>
        )}

        <div onClick={createEvent(date)}>
          <span>+</span>&nbsp;
          add new
        </div>
      </section>
    );
  }
}

export default connect(s => s.events, dispatchProps)(Events);
