// @flow
import { BROWSE } from '../actions/counter';

export type fileTreeStateType = {
  +files: Array
};

type actionType = {
  +type: string
};

const defaultState = {
  connection: []
};

export default function fileTree(state: Object = defaultState, action: actionType) {
  switch (action.type) {
    case BROWSE:
      return state;
    default:
      return state;
  }
}
