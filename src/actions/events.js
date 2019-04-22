

export const Actions = {

  UPDATE: 'events.update'
};

const Events = {

  Loading: () => ({ type: Actions.LOADING }),

  Update: data => ({ type: Actions.UPDATE, data }),

};

export default Events;