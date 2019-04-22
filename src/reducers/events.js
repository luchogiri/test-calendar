
import {Actions} from '../actions/events';
import moment from 'moment';

const InitialState = {

  items: [

    // some initial items
    { id: 1, name: 'CU test started!', color: '#FF0000', date: moment('2019-04-19T16:00:00.000') },
    { id: 1, name: 'CookUnity rocks', color: '#339933', date: moment('2019-04-21T18:00:00.000') },
    { id: 2, name: 'CU test finished', color: '#FF00FF', date: moment('2019-04-22T14:00:00.000') },
  ]
};


const Events = (state = { ...InitialState }, action) => {

  let items, i;


  switch (action.type) {

    case Actions.CREATE:
      return { ...state, items: [ ...state.items, action.data ] };

    case Actions.UPDATE:
      i = state.items.findIndex( i => i.id === action.data.id );
      items = [ ...state.items.slice(0, i), action.data, ...state.items.slice(i+1, state.items.length) ];
      return { ...state, items };

    case Actions.DELETE:
      i = state.items.findIndex( i => i.id === action.data );
      items = [ ...state.items.slice(0, i), ...state.items.slice(i+1, state.items.length) ];
      return { ...state, items };

    default:
      return state;
  }
};

export default Events;