import { Repository } from 'typeorm';
import { UserEntity } from '@entities/users.entity';
import { User } from '@interfaces/users.interface';
export declare class AuthService extends Repository<UserEntity> {
    signup(userData: User): Promise<User>;
    login(userData: User): Promise<{
        cookie: string;
        findUser: User;
        token: string;
    }>;
    logout(userData: User): Promise<User>;
}
