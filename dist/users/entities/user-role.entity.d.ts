import { User } from './user.entity';
export declare enum Role {
    USER = "user",
    ADMIN = "admin"
}
export declare class UserRole {
    id: string;
    role: number;
    user: User;
}
