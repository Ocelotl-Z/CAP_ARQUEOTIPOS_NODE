process.env.NODE_ENV = "test";

import { expect } from "chai";
import UserFacade from "../../src/facade/User/facade";
import { db } from "../../src/config/connection/database";
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";

describe("UserFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
    User.create({
      id: 1,
      name: "test",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
    });
  });

  describe("FindAll", () => {
    it("should return one user", async () => {
      const User: any[] = await UserFacade.findAll();
      expect(1).equal(User.length);
    });
  });

  describe("Create User", () => {
    it("should create one user", async () => {
      let user: UserTo = {
        email: "test@gmail.com",
        name: "Jefe Maestro",
      };
      const User: UserTo = await UserFacade.create(user);
      expect(user.name).equal(User.name);
    });
  });

  describe("Create User ERROR", () => {
    it("should return ERROR", async () => {
      let user: UserTo = {
        email: "test@gmail.com",
        name: "Jefe Maestro",
      };
      try {
        await UserFacade.create(user);
      } catch (error) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });

  describe("Create user whit empty email", () => {
    it("should return ERROR", async () => {
      let user: UserTo = {
        name: "Test Prueba",
        email: "",
      };
      try {
        await UserFacade.create(user);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal("Campo email esta vacio");
      }
    });
  });

  describe("Create user whit invalid email", () => {
    it("should return ERROR", async () => {
      let user: UserTo = {
        name: "Erick Ocelotl",
        email: "some@",
      };
      try {
        await UserFacade.create(user);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal("Email invalido");
      }
    });
  });

  describe("Update TEST", () => {
    it("Update user", async () => {
      const updateObject: UserTo = {
        id: 2,
        email: "prueba123@gmail.com",
        name: "Nuevo usuario",
      };

      let user: UserTo = await UserFacade.update(updateObject);

      expect(updateObject.name).equal(user.name);
    });

    it("Error Update user", async () => {
      const updateObject: UserTo = {
        id: 1998,
        email: "testEmail@gmail.com",
        name: "Nuevo Usuario",
      };

      try {
        await UserFacade.update(updateObject);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });

  describe("Delete TEST", () => {
    it("Delete", async () => {
      await UserFacade.publish(1);
      await UserFacade.consumer(1);
    });

    it("Delete error", async () => {
      //SOME TEST HERE
    });
  });
});
