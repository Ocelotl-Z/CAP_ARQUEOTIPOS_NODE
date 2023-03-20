import * as Kafka from "../../config/stream/kafka";
import { Utils } from "../../commons/utils/Utils";
import { ParametersError } from "../../config/error";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findAll(): Promise<any[]> {
    let User = await UserService.findAll();
    return User;
  },

  /**
   * @returns {Promise < UserTo >}
   * @memberof UserFacade
   */
  async create(user: UserTo): Promise<UserTo> {
    Utils.required({ email: user.email });
    await UserService.validateEmail(user);
    await UserService.validateExistUser(user.email);
    let User = await UserService.create(user);
    return User;
  },

  /**
   * @returns {Promise < void >}
   * @memberof UserFacade
   */
  async publish(id: number): Promise<void> {
    Kafka.send("user-service-topic", `${id}`);
  },

  /**
   * @returns {Promise < void >}
   * @memberof UserFacade
   */
  async consumer(id: number): Promise<void> {
    await UserService.deleteUser(id);
  },

  async update(user: UserTo): Promise<UserTo> {
    Utils.required({ name: user.name, id: user.id, email: user.email });
    await UserService.validateEmail(user);
    let updateUser = await UserService.update(user);
    return updateUser;
  },
};

export default UserFacade;
