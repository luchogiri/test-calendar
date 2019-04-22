
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

    const {createEvent, updateEvent, date} = this.props;
    const events = 5;

    return (
      <section className="calendar__events">
        {[...(new Array( events ))].map((a,i) =>
          <div key={i} onClick={updateEvent(date)}>
            <span>&#9679;</span>&nbsp;
            new event {i}
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

export default connect(s => s, dispatchProps)(Events);
