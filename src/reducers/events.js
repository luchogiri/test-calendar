
import {Actions} from '../actions/events';

const InitialState = [];


const Events = (state = { ...InitialState }, action) => {

  switch (action.type) {

    case Actions.UPDATE:
      return [ ...action.data ];

    default:
      return state;
  }
};

export default Events;