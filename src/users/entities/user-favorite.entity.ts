import { Item } from 'src/items/entities/item.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserFavorite {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Item, item => item.favorites)
    item: Item;

    @ManyToOne(() => User, user => user.favorites)
    user: User;
}
