import { RoleTo } from "../../to/RoleTo";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {
  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleFacade
   */
  create(role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<RoleTo[]>}
   * @memberof IRoleFacade
   */
  findAll(): Promise<RoleTo[]>;

  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleFacade
   */
  findById(id: number): Promise<RoleTo>;

  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleFacade
   */
  patchRole(id: number, role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<RoleTo>}
   * @memberof IRoleFacade
   */
  updateRole(id: number, role: RoleTo): Promise<RoleTo>;

  /**
   * @returns {Promise<void>}
   * @memberof IRoleFacade
   */
  deleteRole(id: number): Promise<void>;

  /**
   * @returns {Promise<void>}
   * @memberof IUserFacade
   */
  consumer(action: string, data: RoleTo): Promise<void>;
}
