import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    CreatedAt,
    UpdatedAt,
    } from 'sequelize-typescript';
import User from './User';
import Oeuvre from './Oeuvre';

@Table({
    timestamps: true,
    tableName: 'comment',
    modelName: 'Comment',
})
class Comment extends Model {
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
    declare content: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    declare userId: string;

    @BelongsTo(() => User)
    declare user: User;

    @ForeignKey(() => Oeuvre)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    declare oeuvreId: string;

    @BelongsTo(() => Oeuvre)
    declare oeuvre: Oeuvre;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default Comment;