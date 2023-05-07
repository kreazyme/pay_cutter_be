import { ExpenseEntity } from "@/entities/expense.entity";
import { Repository } from "typeorm";
export declare class ExpenseService extends Repository<ExpenseEntity> {
    findExpense(id: number): Promise<ExpenseEntity>;
    createExpense(name: string, description: string, amount: number, paidBy: number, groupId: number, participants: number[], createBy: number, imageURL: string): Promise<ExpenseEntity>;
    getExpensesByGroup(groupId: number): Promise<ExpenseEntity[]>;
    updateExpense(id: number, name: string, description: string, amount: number, paidBy: number, groupId: number, participants: number[], createBy: number, imageURL: string): Promise<ExpenseEntity>;
}
