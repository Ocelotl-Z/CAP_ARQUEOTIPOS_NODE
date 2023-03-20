process.env.NODE_ENV = "test";

import { expect } from "chai";
import RoleFacade from "../../src/facade/Role/facade";
import { db } from "../../src/config/connection/database";
import Role from "../../src/models/Role.model";
import * as Kafka from "../../src/config/stream/kafka";
import { RoleTo } from "../../src/to/RoleTo";
import { ParametersError } from "../../src/config/error";

describe("RoleFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
    Role.create({
      name: "Blogger",
    });

    Role.create({
      name: "Editor",
    });
  });

  describe("Create Role", () => {
    it("should create one role", async () => {
      let role: RoleTo = {
        name: "Admin",
      };
      const Role: RoleTo = await RoleFacade.create(role);
      expect(Role.id).to.not.be.null;
    });
  });

  describe("Create role whit empty email", () => {
    it("should return ERROR", async () => {
      let role: RoleTo = {};
      try {
        await RoleFacade.create(role);
      } catch (error) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });

  describe("Get All Roles", () => {
    it("should return all roles", async () => {
      const roles: RoleTo[] = await RoleFacade.findAll();
      expect(roles.length).to.not.be.NaN;
      expect(roles.length).to.be.above(0);
    });
  });

  describe("Get Role by ID", () => {
    it("should return one role", async () => {
      const role: RoleTo = await RoleFacade.findById(3);
      expect("Admin").equal(role.name);
    });
  });

  describe("ERROR get Role by ID", () => {
    it("should return Error", async () => {
      try {
        await RoleFacade.findById(1998);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equals("No se encontro el el role");
      }
    });
  });

  describe("Patch Role", () => {
    it("should return role whit partial updates", async () => {
      const patchObject: RoleTo = {
        id: 2,
        name: "Viewer",
      };
      let role: RoleTo = await RoleFacade.patchRole(2, patchObject);
      expect("Viewer").equal(role.name);
    });
  });

  describe("Update Role", () => {
    it("should return role whit updates", async () => {
      const updateObject: RoleTo = {
        id: 3,
        name: "Streamer",
      };
      let role: RoleTo = await RoleFacade.updateRole(3, updateObject);
      console.log(role);
      expect(updateObject.name).equal(role.name);
    });
  });

  describe("Error Update Role", () => {
    it("should return error", async () => {
      const updateObject: RoleTo = {
        id: 3,
        name: "Streamer",
      };

      try {
        await RoleFacade.updateRole(3, updateObject);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equals("El atributo id es requerido");
      }
    });
  });

  describe("Delete Role", () => {
    it("should return true", async () => {
      await RoleFacade.deleteRole(1);
      try {
        await RoleFacade.findById(1);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equals("No se encontro el el role");
      }
    });
  });

  describe("Error delete Role", () => {
    it("should return true", async () => {
      try {
        await RoleFacade.deleteRole(1998);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equals("No se encontro el el role");
      }
    });
  });

  describe("KAFFKA CONSUMSER", () => {
    it("should pass", async () => {
      await RoleFacade.consumer("delete", { id: 1 });
    });

    it("should trhow and error", async () => {
      try {
        await RoleFacade.consumer("correr", { id: 1 });
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equals(`La accion correr no se encontro`);
      }
    });
  });
});
