import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@/exceptions/httpException';
export declare const ErrorMiddleware: (error: HttpException, req: Request, res: Response, next: NextFunction) => void;
