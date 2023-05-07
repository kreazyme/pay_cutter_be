import { Expense } from "@/interfaces/expense.interface";
import { BaseEntity } from "typeorm";
import { UserEntity } from "./users.entity";
import { GroupEntity } from "./group.entity";
export declare class ExpenseEntity extends BaseEntity implements Expense {
    id?: number;
    name: string;
    description?: string;
    amount: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy: UserEntity;
    paidBy: UserEntity;
    toGroup: GroupEntity;
    participants: UserEntity[];
    imageURL?: string;
}
