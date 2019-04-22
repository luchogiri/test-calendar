

export const Actions = {

  CREATE: 'events.create',
  UPDATE: 'events.update',
  DELETE: 'events.delete',
};

const Events = {

  Create: data => ({ type: Actions.CREATE, data }),

  Update: data => ({ type: Actions.UPDATE, data }),

  Delete: data => ({ type: Actions.DELETE, data }),

};

export default Events;