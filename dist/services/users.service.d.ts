import { Repository } from 'typeorm';
import { UserEntity } from '@entities/users.entity';
import { User } from '@interfaces/users.interface';
export declare class UserService extends Repository<UserEntity> {
    findAllUser(): Promise<User[]>;
    findUserById(userId: number): Promise<User>;
    createUser(userData: User): Promise<User>;
    updateUser(userId: number, userData: User): Promise<User>;
    deleteUser(userId: number): Promise<User>;
}
