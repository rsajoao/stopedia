'use strict';

// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'admin@stopdb.com',
        password: '$2a$10$jFYnODVIAKMmgC05VdozAeol1m2PK18MWNgOpZdsIkUbSzI66C2Va',
        role: 'admin',
          // senha !adm--94*-
      },
      {
        username: 'user',
        email: 'user@email.com',
        password: '$2a$10$aUU9a2lkUzX7y2L8i3RXY.5O//nMsxhh0ZeweZTwkZG.aPy3yR61S',
        role: 'user',
          // senha bacon35*/
      },
      {
        username: 'joaovitor',
        email: 'joaovitors@outlook.com',
        password: '$2a$10$o8XzD7aeZgbNRCv.HDjToO07Fh5nfHyox1NSiCqtZTcgfKusQeKYm',
        role: 'user',
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
