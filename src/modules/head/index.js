
import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Configs from '../../actions/configs';

import './head.scss';


const dispatchProps = dispatch => ({

  reset: () => dispatch( Configs.ResetMonth() ),
  next: () => dispatch( Configs.AddMonth() ),
  previous: () => dispatch( Configs.SubtractMonth() )
});


const Head = ({ month, reset, next, previous }) => (

  <header className="calendar__head">

    <section className="calendar__head__title">
      <h1>
        <strong>
          {month.format('MMMM')}
        </strong> {month.format('YYYY')}
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

export default connect(s => s.configs, dispatchProps)(Head);
