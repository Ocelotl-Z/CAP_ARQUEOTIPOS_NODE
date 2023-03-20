import { Router } from "express";
import { UserFacade } from "../facade";
import { logger } from "../config/logger/logger";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users:
 *  get:
 *    description: Get all Users
 *    tags: ["Users"]
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get("", UserFacade.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users:
 *  post:
 *    description: create USERS
 *    tags: ["Users"]
 *    requestBody:
 *        description: Object of User
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/UserTo'
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.post("", UserFacade.create);

/**
 * DELETE method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/{id}:
 *  delete:
 *    description: delete USERS
 *    tags: ["Users"]
 *    parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.delete("/:id", UserFacade.publish);

/**
 * PUT method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/{id}:
 *  put:
 *    description: Update user
 *    tags: ["Users"]
 *    parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *    requestBody:
 *        description: Object of User
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                  $ref: '#/components/schemas/UserTo'
 *    responses:
 *      200:
 *        description: One User
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.put("/:id", UserFacade.update);

/**
 * GET method route
 * @example http://localhost:PORT/users/ping
 * @swagger
 * /users/ping:
 *  get:
 *    description: Test service
 *    tags: ["Users"]
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
  logger.info("(%s) - Request accepted: %s", "UserRouter.ts", "");
  res.send("pong");
  logger.info("(%s) - Sending Response: %s", "UserRouter.ts", { data: "pong" });
});

/**
 * @export {express.Router}
 */
export default router;
