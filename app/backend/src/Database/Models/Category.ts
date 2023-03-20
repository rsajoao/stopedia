import { DataTypes, Model } from 'sequelize';
import db from './Config';

export default class Category extends Model {
  declare id: number;
  declare name: string;
  declare themeId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  themeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'theme_id',
  }
}, {
  underscored: true,
  sequelize: db,
});
