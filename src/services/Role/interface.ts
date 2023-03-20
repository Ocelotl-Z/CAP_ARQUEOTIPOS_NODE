import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {
  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleService
   */
  create(role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<RoleTo[]>}
   * @memberof IRoleService
   */
  findAll(): Promise<RoleTo[]>;

  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleService
   */
  findById(id: number): Promise<RoleTo>;

  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleService
   */
  patchRole(id: number, role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleService
   */
  updateRole(id: number, role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<void>}
   * @memberof IUserService
   */
  validateExistRole(id: number): Promise<void>;

  /**
   * @returns {Promise<void>}
   * @memberof IRoleService
   */
  deleteRole(id: number): Promise<void>;
}
