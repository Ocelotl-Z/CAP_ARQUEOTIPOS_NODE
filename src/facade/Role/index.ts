import RoleFacade from "./facade";
import { NextFunction, Request, Response } from "express";
import HttpStatusCode from "../../commons/constants/HttpStatusCode";
import { RoleTo } from "../../to/RoleTo";
import { use } from "chai";
import { logger } from "../../config/logger/logger";
import { ParametersError } from "../../config/error";
import { RoleService } from "../../services";

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
    let role: RoleTo = { ...req.body };

    logger.info(
      "(%s) -  Request post: %s",
      "RoleRouter.ts",
      JSON.stringify(role)
    );
    role = await RoleFacade.create(role);
    res.status(HttpStatusCode.OK).json(role);
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
export async function findAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const roles: RoleTo[] = await RoleFacade.findAll();
    res.status(HttpStatusCode.OK).json(roles);
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
export async function findById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    const Role: RoleTo = await RoleFacade.findById(Number(id));
    res.status(HttpStatusCode.OK).json(Role);
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
export async function patchRole(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    let role: RoleTo = { ...req.body };
    const Role: RoleTo = await RoleFacade.patchRole(Number(id), role);
    res.status(HttpStatusCode.OK).json(Role);
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
export async function updateRole(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    let role: RoleTo = { ...req.body };
    const Role: RoleTo = await RoleFacade.updateRole(Number(id), role);
    res.status(HttpStatusCode.OK).json(Role);
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
export async function deleteRole(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    await RoleFacade.deleteRole(Number(id));
    res.status(HttpStatusCode.OK).json("Role deleted");
  } catch (error) {
    next(error);
  }
}
