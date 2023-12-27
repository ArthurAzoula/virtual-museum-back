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
    ForeignKey,
    } from "sequelize-typescript";
import Oeuvre from "./Oeuvre";

@Table({
    timestamps: true,
    tableName: 'type_oeuvre',
    modelName: 'Type_oeuvre',
})
class Type_oeuvre extends Model {
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
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description: string;

    @ForeignKey(() => Oeuvre)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    declare oeuvreId: string;

    @HasMany(() => Oeuvre)
    declare oeuvre: Oeuvre[];

    @CreatedAt
    declare createdAt: Date;

    @CreatedAt
    declare updatedAt: Date;
}

export default Type_oeuvre;