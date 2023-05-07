import { RequestWithUser } from "@/interfaces/auth.interface";
import { GroupService } from "@/services/group.service";
import { NextFunction, Response } from "express";
export declare class GroupController {
    group: GroupService;
    getMyGroups: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    getGroupById: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    createGroup: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    leaveGroup: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    joinGroup: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    shareGroup: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
