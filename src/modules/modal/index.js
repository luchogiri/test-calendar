
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import Configs from '../../actions/configs';
import Event from '../event';

import './modal.scss';


const Modal = ({ modal, dispatch }) => (

  <Fragment>
    {modal &&
    <section className="calendar__modal">
      <div className="calendar__modal__background" onClick={() => dispatch( Configs.HideModal() )} />
      <article className="calendar__modal__content">
        <Event />
      </article>
    </section>}
  </Fragment>
);

export default connect(s => s.configs)(Modal);
