import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

export interface IRole {
  id: number;
  name: string;
}

@Table({
  tableName: "Roles",
  // timestamps: false,
})
export default class Roles extends Model implements IRole {
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;

  @Column
  name!: string;
}
