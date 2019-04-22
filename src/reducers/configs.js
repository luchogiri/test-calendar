
import moment from 'moment';
import {Actions} from '../actions/configs';

const InitialState = {

  now: moment(),
  month: moment().startOf('month')
};


const Configs = (state = { ...InitialState }, action) => {

  switch (action.type) {

    case Actions.MONTH_RESET:
      return { ...state, month: moment().startOf('month') };

    case Actions.MONTH_ADD:
      return { ...state, month: state.month.add(1, 'month') };

    case Actions.MONTH_SUBTRACT:
      return { ...state, month: state.month.subtract(1, 'month') };

    default:
      return state;
  }
};

export default Configs;