import {
    Table,
    Column,
    Model,
    HasMany,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    Unique,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    } from 'sequelize-typescript';
import Oeuvre from './Oeuvre';

@Table({
    timestamps: true,
    tableName: 'artist',
    modelName: 'Artist',
})
class Artist extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare lastname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare firstname: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    declare email: string;

    // declare roles array of string
    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    declare roles: string[];

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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare phone: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    declare address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare instagram: string;

    @HasMany(() => Oeuvre)
    declare oeuvres: Oeuvre[];

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default Artist;