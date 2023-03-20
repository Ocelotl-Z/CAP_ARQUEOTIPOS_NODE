import { Utils } from "../../commons/utils/Utils";
import { ParametersError } from "../../config/error";
import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo";
import { IRoleFacade } from "./interface";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
  /**
   * @returns {Promise < RoleTo >}
   * @memberof RoleFacade
   */
  async create(role: RoleTo): Promise<RoleTo> {
    Utils.required({ name: role.name });
    let Role = await RoleService.create(role);
    return Role;
  },

  /**
   * @returns {Promise <RoleTo[]>}
   * @memberof RoleFacade
   */
  async findAll(): Promise<RoleTo[]> {
    let roles: RoleTo[] = await RoleService.findAll();
    return roles;
  },

  /**
   * @returns {Promise <RoleTo>}
   * @memberof RoleFacade
   */
  async findById(id: number): Promise<RoleTo> {
    let role = await RoleService.findById(id);
    return role;
  },

  /**
   * @returns {Promise <RoleTo>}
   * @memberof RoleFacade
   */
  async patchRole(id: number, role: RoleTo): Promise<RoleTo> {
    await RoleService.validateExistRole(id);
    let newRole = await RoleService.patchRole(id, role);
    return newRole;
  },

  /**
   * @returns {Promise <RoleTo>}
   * @memberof RoleFacade
   */
  async updateRole(id: number, role: RoleTo): Promise<RoleTo> {
    Utils.required({ name: role.name, id: role.id });
    await RoleService.validateExistRole(id);
    let newRole = await RoleService.updateRole(id, role);
    return newRole;
  },

  /**
   * @returns {Promise <void>}
   * @memberof RoleFacade
   */
  async deleteRole(id: number): Promise<void> {
    await RoleService.validateExistRole(id);
    Utils.publish("role-service-topic", { action: "delete", data: { id: id } });
  },

  /**
   * @returns {Promise <void>}
   * @memberof RoleFacade
   */
  async consumer(action: string, data: RoleTo): Promise<void> {
    
    switch (action) {
      case "delete":
        await RoleService.deleteRole(data.id!);
        break;

      default:
        throw new ParametersError(`La accion ${action} no se encontro`);
    }
  },
};

export default RoleFacade;
