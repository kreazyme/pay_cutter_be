import { Group } from "@/interfaces/group.interface";
import { BaseEntity } from "typeorm";
import { UserEntity } from "./users.entity";
export declare class GroupEntity extends BaseEntity implements Group {
    id: number;
    name: string;
    description?: string;
    joinCode?: string;
    joinCodeExpires?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    participants: UserEntity[];
}
