import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka";
import { UserTo } from "../../to/UserTo";
import { ParametersError } from "../../config/error";
import { where } from "sequelize/types";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findAll(): Promise<any[]> {
    // Para enviar un mensaje a kafka
    // await Kafka.send("test", 'Hello');
    return User.findAll();
  },

  async validateExistUser(email: string): Promise<void> {
    let user = await User.findOne({ where: { email: email } });
    if (user) {
      throw new ParametersError("El usuario ya existe");
    }
  },

  async create(user: UserTo): Promise<UserTo> {
    let userModel = await User.create(user);
    return userModel;
  },

  async validateEmail(user: UserTo): Promise<void> {
    const mailformat = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;

    if (user.email == "") {
      throw new ParametersError("Campo email esta vacio");
    }

    if (!mailformat.test(user.email)) {
      throw new ParametersError("Email invalido");
    }
  },

  async deleteUser(id: number): Promise<void> {
    await User.destroy({ where: { id: id } });
  },
  
  async update(user: UserTo): Promise<UserTo> {
    try {
      let userModel = await User.findOne({ where: { id: user.id } });
      userModel!.set(user);
      userModel = await userModel!.save();
      return userModel;
    } catch (error) {
      throw new ParametersError("Error al actualizar");
    }
  },
};

export default UserService;
