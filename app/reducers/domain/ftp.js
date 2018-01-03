// @flow
import { OPEN_FILE } from '../../actions';

export type fileTreeStateType = {
  +files: Array
};

type actionType = {
  +type: string
};

const defaultState = {
  files: [
    { name: 'MyFolder', editDate: 'Edited 1 Jan 2017', type: 'folder' },
    { name: 'MyFile', editDate: 'Edited 1 Jan 2017', type: 'file' }
  ],
  client: null
};

export default function fileTree(state: Object = defaultState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE:
      return state;
    default:
      return state;
  }
}
