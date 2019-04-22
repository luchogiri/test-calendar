
import React, {PureComponent} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Configs from '../../actions/configs';

import './head.scss';


const dispatchProps = dispatch => ({

  reset: () => dispatch( Configs.ResetMonth() ),
  next: () => dispatch( Configs.AddMonth() ),
  previous: () => dispatch( Configs.SubtractMonth() )
});


class Head extends PureComponent {

  render () {

    const { configs, reset, next, previous } = this.props;

    return (
      <header className="calendar__head">

        <section className="calendar__head__title">
          <h1>
            <strong>
              {configs.month.format('MMMM')}
            </strong> {configs.month.format('YYYY')}
          </h1>

          <nav>
            <div onClick={previous}>&lt;</div>
            <div onClick={reset}>Today</div>
            <div onClick={next}>&gt;</div>
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

export default connect(s => s, dispatchProps)(Head);
