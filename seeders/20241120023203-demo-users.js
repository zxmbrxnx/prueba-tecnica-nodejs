'use strict'
import bcrypt from 'bcrypt'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin', 10),
        rol: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'user',
        email: 'user@user.com',
        password: bcrypt.hashSync('user', 10),
        rol: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {})
  }
}
