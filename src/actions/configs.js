

export const Actions = {

  MONTH_RESET: 'configs.month.reset',
  MONTH_ADD: 'configs.month.add',
  MONTH_SUBTRACT: 'configs.month.subtract',

  MODAL_SHOW: 'configs.modal.show',
  MODAL_HIDE: 'configs.modal.hide',
};

const Configs = {

  ResetMonth: () => ({ type: Actions.MONTH_RESET }),

  AddMonth: () => ({ type: Actions.MONTH_ADD }),

  SubtractMonth: () => ({ type: Actions.MONTH_SUBTRACT }),


  ShowModal: (date, item) => ({ type: Actions.MODAL_SHOW, date, item }),

  HideModal: () => ({ type: Actions.MODAL_HIDE })
};

export default Configs;