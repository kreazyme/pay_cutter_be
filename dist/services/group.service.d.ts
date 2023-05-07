import { GroupEntity } from "@/entities/group.entity";
import { User } from "@/interfaces/users.interface";
import { Repository } from "typeorm";
export declare class GroupService extends Repository<GroupEntity> {
    findMyGroups(userID: number): Promise<GroupEntity[]>;
    findGroupById(groupID: number, userID: number): Promise<GroupEntity>;
    createGroup(groupName: string, user: User, description: string): Promise<GroupEntity>;
    leaveGroup(groupID: number, userID: number): Promise<GroupEntity>;
    joinGroup(code: string, userID: number): Promise<GroupEntity>;
    shareGroup(groupID: number, userID: number): Promise<string>;
}
