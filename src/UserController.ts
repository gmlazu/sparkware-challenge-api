import {NextFunction, Request, Response, Router} from "express";
import axios, {AxiosResponse} from "axios";

interface IUser {
    firstName: string,
    lastName: string,
    userName: string,
    dateOfBirth: string,
}

/**
 * Instance of the Express Router
 */
const router: Router = Router();

/**
 * Route GET /users/
 */
router.get("/", (req: Request, res: Response, next: NextFunction): void => {
    const id: string = req.query.id as string;

    if (!id) {
        return next(new Error("The query parameter 'id' is required"));
    }

    axios.get(`https://randomuser.me/api/?seed=${id}`)
        .then((result: AxiosResponse<any>) => {
            const user: any = result.data.results[0];

            return {
                id: id,
                firstName: user.name.first,
                lastName: user.name.last,
                userName: user.login.username,
                dateOfBirth: user.dob.date
            }
        })
        .then((user: IUser) => res.status(200).send(user))
        .catch(next);
});

/**
 * Route POST /users/
 */
router.post("/", (req: Request, res: Response, next: NextFunction): void => {
    return next(new Error("An unknown error has occured. Try again"));
});

export const UserController: Router = router;
