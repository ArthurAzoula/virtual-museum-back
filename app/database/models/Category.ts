import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    Unique,
    HasMany,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    } from "sequelize-typescript";
import Oeuvre from "./Oeuvre";
import { Cast } from "sequelize/types/utils";

@Table({
    timestamps: true,
    tableName: 'category',
    modelName: 'Category',
})
class Category extends Model {
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
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description: string;

    // Slug column
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,

        set(value: string) {
            this.setDataValue('slug', value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
        },
        get() {
            return this.getDataValue('slug');
        }
         

    })
    declare slug: string;

    @HasMany(() => Oeuvre)
    declare oeuvres: Oeuvre[];

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default Category;