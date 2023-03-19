'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('categories', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    themeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'themes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'theme_id',
      foreignKey: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      field: 'updated_at',
    },
  }, {
    underscored: true,
  });
}
export async function down(queryInterface) {
  await queryInterface.dropTable('categories');
}
