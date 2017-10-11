// @flow

type actionType = {
  +type: string
};

export const CONNECT_TO_SERVER = 'CONNECT_TO_SERVER';
export const CONNECTED_TO_SERVER = 'CONNECTED_TO_SERVER';
export const OPEN_FILE = 'OPEN_FILE';

export type ConnectToServerAction = {
  type: CONNECT_TO_SERVER,
  server: string,
  username: string,
  password: string
}

export type ConnectedToServerAction = {
  type: CONNECTED_TO_SERVER
}

export function openFile(file: Object) {
  return {
    type: OPEN_FILE,
    file: file
  };
}

export function connectedToServer(): ConnectedToServerAction {
  return {
    type: CONNECTED_TO_SERVER
  };
}

/**
 * Creates an action that connects the FTP client the given server with
 * the given username and password.
 * @param {string} server
 * @param {string} username
 * @param {string} password
 */
export function connectToServer(server: string, username: string, password: string) : ConnectToServerAction {
  return {
    type: CONNECT_TO_SERVER,
    server,
    username,
    password
  };
}
