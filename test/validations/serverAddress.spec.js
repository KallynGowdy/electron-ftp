import serverAddress from '../../app/validations/serverAddress';

/**
 * A list of addresses that are tested to be valid server addresses for FTP.
 */
export const validAddresses = [
  '127.0.0.1',
  '192.168.1.1',
  '172.26.1.1',
  '10.0.0.3',
  '254.254.254.254',
  '0.0.0.1',
  '96.54.212.4:1',
  '96.54.212.4:65535',
  'www.example.com',
  'example',
  'example.io',
  'example.anything',
  'www.example.com:1',
  'www.example.com:65535',
  'ftp://www.example.com',
  'ftp://www.example.com:1',
  'ftp://www.example.com:65535',
  'sftp://www.example.com',
  'sftp://www.example.com:1',
  'sftp://www.example.com:65535',
  null,
  undefined
];

/**
 * A list of addresses that are tested to be invalid server addresses for FTP.
 */
export const invalidAddresses = [
  '0.0.0.0',
  '255.255.255.255',
  '0.0.0.256',
  '256.0.0.1',
  'www.example.com:65536',
  'www.example.com:0'
];

describe('validations', () => {
  describe('serverAddress', () => {
    validAddresses.forEach(address => {
      it('should pass with ' + address, () => {
        const result = serverAddress(address);

        expect(result).toBeUndefined();
      });
    });

    invalidAddresses.forEach(address => {
      it('should fail for ' + address, () => {
        const result = serverAddress(address);

        expect(result).toBe('Invalid server');
      });
    });
  });
});
