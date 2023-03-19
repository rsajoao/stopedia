'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('answers', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    answer: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'uniqueAnswerPerCategory',
    },
    rarity: {
      type: Sequelize.ENUM('rare', 'common', 'unknown'),
      defaultValue: 'unknown',
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'category_id',
      foreignKey: true,
      unique: 'uniqueAnswerPerCategory',
    },
    userId: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET DEFAULT',
      field: 'user_id',
      foreignKey: true,
    },
    status: {
      type: Sequelize.ENUM('accepted', 'rejected', 'pending'),
      defaultValue: 'pending',
      allowNull: false,
    },
    visibility: {
      type: Sequelize.ENUM('public', 'private'),
      defaultValue: 'public',
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at'
    },
    letter: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      field: 'updated_at'
    },
  });
}
export async function down(queryInterface) {
  await queryInterface.dropTable('answers');
}
