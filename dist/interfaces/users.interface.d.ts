import { GroupEntity } from "@/entities/group.entity";
export interface User {
    id?: number;
    email: string;
    password: string;
    groups?: GroupEntity[];
}
