import { use } from "chai";
import Roles from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";
import RoleService from "./service";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
  return await RoleService.create(role);
}

/**
 * @export
 * @returns {Promise < RoleTo[] >}
 */
export async function findAll(): Promise<RoleTo[]> {
  return await RoleService.findAll();
}

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function findById(id: number): Promise<RoleTo> {
  return await RoleService.findById(id);
}

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function patchRole(id: number, role: RoleTo): Promise<RoleTo> {
  return await RoleService.patchRole(id, role);
}

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function updateRole(id: number, role: RoleTo): Promise<RoleTo> {
  return await RoleService.updateRole(id, role);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistRole(id: number): Promise<void> {
  return await RoleService.validateExistRole(id);
}

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function deleteRole(id: number): Promise<void> {
  await RoleService.deleteRole(id);
}
