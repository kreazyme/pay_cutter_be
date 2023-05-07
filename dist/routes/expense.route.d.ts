import { Routes } from '@interfaces/routes.interface';
import { ExpenseController } from '@/controllers/expense.controller';
export declare class ExpenseRoute implements Routes {
    router: import("express-serve-static-core").Router;
    path: string;
    expense: ExpenseController;
    constructor();
    private initRoutes;
}
