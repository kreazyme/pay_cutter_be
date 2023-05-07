import { GroupController } from "@/controllers/group.controller";
import { Routes } from "@/interfaces/routes.interface";
export declare class GroupRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    group: GroupController;
    constructor();
    private initRoutes;
}
