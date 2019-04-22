
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Configs from '../../actions/configs';
import Events from '../../actions/events';

import './event.scss';


const COLORS = [
  '#FF0000',
  '#FF00FF',
  '#3333FF',
  '#339933',
  '#FF9900',
];

class Event extends PureComponent {

  state = {
    id: undefined,
    name: '',
    color: COLORS[0],
    day: '',
    hour: '09',
    error: false
  };

  componentDidMount() {

    const {item, configs, events} = this.props;
    const event = events.items.find( i => i.id === item);

    if (!item || !event || !event.id)
      return this.setState({
        day: moment(configs.date).format('YYYY-MM-DD')
      });

    this.setState({
      id: event.id,
      name: event.name,
      day: moment(event.date || configs.date).format('YYYY-MM-DD'),
      hour: moment(event.date || configs.date).format('HH')
    });
  }

  onChange = e => {
    const {name, value} = e.target || e;
    this.setState({ [name]: value });
  };

  onSubmit = () => {

    const data = this.state;
    if (!data.id) {
      // data.id = +new Date();
      // create new event
    }
    else {
      // update event by id
    }

  };

  onDelete = () => {

    const {id, name} = this.state;
    if (window.confirm('Eliminar evento', `¿Seguro desea eliminar el evento ${name}?`))
      console.log( id );
    // delete
  };

  render() {

    const { id, name, color, day, hour } = this.state;

    return (
      <section className="calendar__event">

        <input
          type="text"
          name="name"
          value={name}
          placeholder="New event"
          onChange={this.onChange}
        />

        <section className="calendar__event__colors">
          {COLORS.map(i =>
            <span
              key={i}
              style={{backgroundColor: i}}
              onClick={() => this.onChange({ name: 'color', value: i })}
              className={i === color ? 'selected':''} />
          )}
        </section>

        <section>
          <input
            type="date"
            name="day"
            value={day}
            onChange={this.onChange}
          />

          <select
            name="hour"
            value={hour}
            onChange={this.onChange}>
            {[...new Array(24)].map((u,i) =>
              <option
                key={i}
                value={i < 10 ? '0'+i:i}>
                {i < 10 ?'0'+i:i}:00hs
              </option>
            )}
          </select>
        </section>

        <div
          onClick={this.onSubmit}
          className="calendar__event__actions calendar__event__button">
          {id ? 'ACTUALIZAR':'CREAR'}
        </div>

        <div
          onClick={this.onDelete}
          className="calendar__event__button calendar__event__button--secondary">
          {id ? 'BORRAR':'CANCELAR'}
        </div>

      </section>
    );
  }
}

export default connect(s => s)(Event);
