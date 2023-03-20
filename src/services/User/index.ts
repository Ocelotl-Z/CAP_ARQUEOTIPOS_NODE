import { use } from "chai";
import Users from "../../models/User.model";
import { UserTo } from "../../to/UserTo";
import UserService from "./service";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
  return await UserService.findAll();
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistUser(email: string): Promise<void> {
  return await UserService.validateExistUser(email);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user: UserTo): Promise<UserTo> {
  return await UserService.create(user);
}

export async function validateEmail(user: UserTo): Promise<void> {
  await UserService.validateEmail(user);
}

export async function deleteUser(id: number) {
  await UserService.deleteUser(id);
}

export async function update(user: UserTo): Promise<UserTo> {
  return await UserService.update(user);
}
