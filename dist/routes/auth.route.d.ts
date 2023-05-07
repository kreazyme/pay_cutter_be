import { AuthController } from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
export declare class AuthRoute implements Routes {
    router: import("express-serve-static-core").Router;
    auth: AuthController;
    constructor();
    private initializeRoutes;
}
