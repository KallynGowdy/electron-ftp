// @flow

type actionType = {
  +type: string
};

export const CONNECT_TO_SERVER = 'CONNECT_TO_SERVER';
export const OPEN_FILE = 'OPEN_FILE';

export function openFile(file: Object) {
  return {
    type: OPEN_FILE,
    file: file
  };
}

/**
 * Creates an action that connects the FTP client the given server with
 * the given username and password.
 * @param {string} server
 * @param {string} username
 * @param {string} password
 */
export function connectToServer(server: string, username: string, password: string) {
  return {
    type: CONNECT_TO_SERVER,
    server,
    username,
    password
  };
}
