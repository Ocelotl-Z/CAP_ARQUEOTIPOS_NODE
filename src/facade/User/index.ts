import UserFacade from "./facade";
import { NextFunction, Request, Response, response } from "express";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import { UserTo } from "../../to/UserTo";
import { use } from "chai";
import { logger } from "../../config/logger/logger";
import { ParametersError } from "../../config/error";
import { UserService } from "../../services";

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const User: any[] = await UserFacade.findAll();
    res.status(HttpStatusCode.OK).json(User);
  } catch (error) {
    next(error);
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    let user = { ...req.body };

    logger.info(
      "(%s) -  Request post: %s",
      "UserRouter.ts",
      JSON.stringify(user)
    );
    user = await UserFacade.create(user);
    res.status(HttpStatusCode.OK).json(user);
  } catch (error) {
    next(error);
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function publish(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    logger.info(
      "(%s) -  Request delete: %s",
      "UserRouter.ts",
      JSON.stringify(Number(id))
    );

    await UserFacade.publish(Number(id));
    res.status(HttpStatusCode.OK);
  } catch (error) {
    next(error);
  }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    logger.info(
      "(%s) -  Request delete: %s",
      "UserRouter.ts",
      JSON.stringify(Number(id))
    );

    await UserFacade.publish(Number(id));
    res.status(HttpStatusCode.OK);
  } catch (error) {
    next(error);
  }
}
