import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {
  /**
   * @returns {Promise<any[]>}
   * @memberof IUserService
   */
  findAll(): Promise<any[]>;

  /**
   * @returns {Promise<void>}
   * @memberof IUserService
   */
  validateExistUser(email: string): Promise<void>;

  /**
   * @returns {Promise<UserTo>}
   * @memberof IUserService
   */
  create(user: UserTo): Promise<UserTo>;

  /**
   * @returns {Promise<void>}
   * @memberof IUserService
   */
  validateEmail(user: UserTo): Promise<void>;

  /**
   * @returns {Promise<void>}
   * @memberof IUserService
   */
  deleteUser(id: number): Promise<void>;

  /**
   * @returns {Promise<UserTo>}
   * @memberof IUserService
   */
  update(user: UserTo): Promise<UserTo>;
}
