
import moment from 'moment';
import {Actions} from '../actions/configs';

const InitialState = {

  now: moment(),
  month: moment().startOf('month'),
  modal: false,
  item: undefined,
  date: moment()
};


const Configs = (state = { ...InitialState }, action) => {

  switch (action.type) {

    case Actions.MONTH_RESET:
      return { ...state, month: moment().startOf('month') };

    case Actions.MONTH_ADD:
      return { ...state, month: state.month.add(1, 'month') };

    case Actions.MONTH_SUBTRACT:
      return { ...state, month: state.month.subtract(1, 'month') };


    case Actions.MODAL_SHOW:
      const {date, item} = action;
      return { ...state, modal: true, date, item };

    case Actions.MODAL_HIDE:
      return { ...state, modal: false, item: undefined, date: moment() };


    default:
      return state;
  }
};

export default Configs;