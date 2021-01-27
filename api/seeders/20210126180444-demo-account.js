'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('accounts', [{
      cvu: '00001',
      balance: '5000',
      opening_date: '10/10/21',
      card_id: '000000005',
      card_expiration: '1030',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cvu: '00002',
      balance: '10000',
      opening_date: '05/05/21',
      card_id: '000000007',
      card_expiration: '0530',
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('accounts', null, {});
  }
};