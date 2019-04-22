

export const Actions = {

  MONTH_RESET: 'configs.month.reset',
  MONTH_ADD: 'configs.month.add',
  MONTH_SUBTRACT: 'configs.month.subtract',
};

const Configs = {

  ResetMonth: () => ({ type: Actions.MONTH_RESET }),

  AddMonth: () => ({ type: Actions.MONTH_ADD }),

  SubtractMonth: () => ({ type: Actions.MONTH_SUBTRACT })
};

export default Configs;