import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    CreatedAt,
    UpdatedAt,
    HasOne
} from 'sequelize-typescript';
import Category from './Category';
import Type_oeuvre from './Type_Oeuvre';
import Comment from './Comment';
import Rating from './Rating';
import Artist from './Artist';

@Table({
    timestamps: true,
    tableName: 'oeuvre',
    modelName: 'Oeuvre',
})
class Oeuvre extends Model {
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
    declare title: string;

    @Column({
        type: DataType.DECIMAL(6, 2),
        allowNull: true,
    })
    declare width: number;

    @Column({
        type: DataType.DECIMAL(6, 2),
        allowNull: true,
    })
    declare height: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare isSold: boolean;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: true,
    })
    declare price: number;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare releaseDate: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare file: string;

    // Column slug 
    @Column({
        type: DataType.STRING,
        allowNull: false,

        // Generate slug from title
        set(value: string) {
            const slugify = require('slugify');
            const slug = slugify(value, {
                replacement: '-',
                lower: true,
                strict: true,
            });
            this.setDataValue("slug", slug);
        },
    })
    declare slug: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare isVerified: boolean;

    @HasOne (() => Artist)
    declare artist: Artist;

    @HasOne (() => Type_oeuvre)
    declare type_oeuvre: Type_oeuvre;

    @HasMany(() => Comment)
    declare comment: Comment[];

    @HasMany(() => Rating)
    declare rating: Rating[];

    @HasMany(() => Category)
    declare category: Category[];


    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;


}

export default Oeuvre;