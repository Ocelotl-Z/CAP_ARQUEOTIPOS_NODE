import { Router } from "express";
import { RoleFacade } from "../facade";
import { logger } from "../config/logger/logger";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles:
 *  get:
 *    description: Get all Roles
 *    tags: ["Roles"]
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get("", RoleFacade.findAll);

/**
 * GET method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}:
 *  get:
 *    description: Get one role by id
 *    tags: ["Roles"]
 *    parameters:
 *       - name: id
 *         in: path
 *         description: Role ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *    responses:
 *      200:
 *        description: One Role
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get("/:id", RoleFacade.findById);

/**
 * PATCH method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}:
 *  patch:
 *    description: Patch role
 *    tags: ["Roles"]
 *    parameters:
 *       - name: id
 *         in: path
 *         description: Role ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *    requestBody:
 *        description: Object of Role
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: One Role
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.patch("/:id", RoleFacade.patchRole);

/**
 * POST method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles:
 *  post:
 *    description: create ROLES
 *    tags: ["Roles"]
 *    requestBody:
 *        description: Object of Role
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.post("", RoleFacade.create);

/**
 * PUT method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}:
 *  put:
 *    description: Update role
 *    tags: ["Roles"]
 *    parameters:
 *       - name: id
 *         in: path
 *         description: Role ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *    requestBody:
 *        description: Object of Role
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: One Role
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.put("/:id", RoleFacade.updateRole);

/**
 * DELETE method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}:
 *  delete:
 *    description: Delete one role by id
 *    tags: ["Roles"]
 *    parameters:
 *       - name: id
 *         in: path
 *         description: Role ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *    responses:
 *      200:
 *        description: Role deleted
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.delete("/:id", RoleFacade.deleteRole);

/**
 * GET method route
 * @example http://localhost:PORT/roles/ping
 * @swagger
 * /roles/ping:
 *  get:
 *    description: Test service
 *    tags: ["Roles"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get("/ping", async (req, res) => {
  logger.info("(%s) - Request accepted: %s", "RoleRouter.ts", "");
  res.send("pong");
  logger.info("(%s) - Sending Response: %s", "RoleRouter.ts", { data: "pong" });
});

/**
 * @export {express.Router}
 */
export default router;
