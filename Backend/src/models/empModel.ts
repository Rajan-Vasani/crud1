import { Sequelize, DataTypes, Model } from 'sequelize';
// import { psqlConn } from '../db/dbConn';
import {sequelize}  from '../db/dbConn';
import empAttributes from '../entities/interfaces/empInterface';

interface empNewInterface extends Omit<empAttributes,'createdAt' | 'updatedAt'>{}

export class empDetails extends Model<empNewInterface> implements empNewInterface {
  public id?: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public gender!: string;
  public dob?: Date;
  public address!: string;
  public city!: string;
  public state!: string;
}
empDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'empDetails', // Set the model name
  }
);

export default empDetails;
