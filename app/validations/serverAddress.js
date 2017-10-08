
const errorMessage = 'Invalid server';

/**
 * Validates that the given string is a valid Server Address.
 * Returns `undefined` if valid. Otherwise returns an error message.
 * @param {String} value The string to test.
 */
export default function (value: string | null | undefined) {

  if (!value) {
    return;
  }

  if (value.indexOf('://') >= 0) {
    value = value.substr(value.indexOf('://') + 3);
  }

  if (value.indexOf('ftp') !== 0 || value.indexOf('sftp') !== 0) {
    value = 'https://' + value;
  }

  try {
    const url = new URL('/', value);

    // 0.0.0.0 and 255.255.255.255 are not valid because no single computer is
    // ever going to use 0.0.0.0 or 255.255.255.255
    if (url.hostname === '0.0.0.0' || url.hostname === '255.255.255.255') {

      // TODO: replace with a descriptive error message.
      return errorMessage;
    }

    // port 0 is not valid because it might cause some weird issues
    // with servers.
    if (url.port === '0') {
      // TODO: Replace with a descriptive error message.
      return errorMessage;
    }

  } catch (ex) {
    return errorMessage;
  }
}
