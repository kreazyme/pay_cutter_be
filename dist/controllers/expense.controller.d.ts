import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
import { ExpenseService } from '@/services/expense.service';
export declare class ExpenseController {
    expense: ExpenseService;
    createExpense: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    findExpense: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    getExpensesByGroup: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    updateExpense: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
