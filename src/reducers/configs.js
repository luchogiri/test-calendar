
import moment from 'moment';
import {Actions} from '../actions/configs';

const InitialState = {

  month: moment().startOf('month')
};


const Configs = (state = { ...InitialState }, action) => {

  switch (action.type) {

    case Actions.UPDATE:
      return state;

    default:
      return state;
  }
};

export default Configs;