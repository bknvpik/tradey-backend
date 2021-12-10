import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, AfterInsert, AfterRemove, BeforeInsert, AfterLoad, BeforeUpdate, AfterUpdate, BeforeRemove, JoinColumn, JoinTable, getRepository } from 'typeorm';

@Entity()
export class Favorite {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Item, item => item.favorites)
    item: Item;

    @ManyToOne(() => User, user => user.favorites)
    user: User;
}
