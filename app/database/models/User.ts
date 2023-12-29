import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import Rating from "./Rating";
import Comment from "./Comment";

@Table({
  timestamps: true,
  tableName: "user",
  modelName: "User",
})
class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,

    // Encrypt the password before saving it to the database
    set(value: string) {
      const bcrypt = require("bcrypt");
      const saltRounds = 10;
      const hash = bcrypt.hashSync(value, saltRounds);
      this.setDataValue("password", hash);
    },

    // Prevent the password from being returned by queries
    get() {
      return undefined;
    },
  })
  declare password: string;

  // array of strings role
  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  declare roles: string[];

  // telephone number
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare phone: string;

  @HasMany(() => Rating)
  declare rating: Rating[];

  @HasMany(() => Comment)
  declare comment: Comment[];

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}

export default User;
