import { BaseEntity } from 'typeorm';
import { User } from '@interfaces/users.interface';
export declare class UserEntity extends BaseEntity implements User {
    id: number;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
