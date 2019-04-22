

export const Actions = {

  UPDATE: 'configs.update'
};

const Configs = {

  Loading: () => ({ type: Actions.LOADING }),

  Update: data => ({ type: Actions.UPDATE, data }),

};

export default Configs;