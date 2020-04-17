import {ErrorRequestHandler, NextFunction, Request, Response} from "express";

/**
 * Middleware for handling errors
 * @param err Error to be handled
 * @param req Express request object
 * @param res Express response object
 * @param next next middleware
 */
export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500)
        .json({
            error: err.message
        });
};
