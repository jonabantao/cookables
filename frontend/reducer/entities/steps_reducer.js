import _ from 'lodash';

import {
  RECEIVE_STEP,
  DELETE_STEP,
} from '../../actions/step_actions';
import { RECEIVE_RECIPE } from '../../actions/recipe_actions';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_STEP:
      return _.merge({}, state, action.step);
    case RECEIVE_RECIPE:
      return _.merge({}, action.payload.steps);
    case DELETE_STEP:
      newState = _.merge({}, state);
      delete newState[action.stepId];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
