import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import { RoleTo } from "../../to/RoleTo";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {
  /**
   * @returns {Promise < RoleTo >}
   * @memberof RoleFacade
   */
  async create(role: RoleTo): Promise<RoleTo> {
    let roleModel = await Role.create(role);
    return roleModel;
  },

  /**
   * @returns {Promise < RoleTo[] >}
   * @memberof RoleFacade
   */
  async findAll(): Promise<RoleTo[]> {
    let roles = await Role.findAll();
    return roles;
  },

  /**
   * @returns {Promise < RoleTo >}
   * @memberof RoleFacade
   */
  async validateExistRole(id: number): Promise<void> {
    let role = await Role.findOne({ where: { id } });
    if (!role) {
      throw new ParametersError("No se encontro el el role");
    }
  },

  /**
   * @returns {Promise < RoleTo >}
   * @memberof RoleFacade
   */
  async findById(id: number): Promise<RoleTo> {
    let role = await Role.findOne({ where: { id } });
    if (!role) {
      throw new ParametersError("No se encontro el el role");
    }
    return role;
  },

  /**
   * @returns {Promise < RoleTo >}
   * @memberof RoleFacade
   */
  async patchRole(id: number, role: RoleTo): Promise<RoleTo> {
    role.id = id;
    let [intance, created] = await Role.upsert(role);
    return intance;
  },

  /**
   * @returns {Promise < RoleTo >}
   * @memberof RoleFacade
   */
  async updateRole(id: number, role: RoleTo): Promise<RoleTo> {
    let roleToUpdate = await Role.findOne({ where: { id } });
    roleToUpdate!.set(role);
    roleToUpdate = await roleToUpdate!.save();

    return roleToUpdate;
  },

  /**
   * @returns {Promise < void >}
   * @memberof RoleFacade
   */
  async deleteRole(id: number): Promise<void> {
    await Role.destroy({ where: { id } });
  },
};

export default RoleService;
