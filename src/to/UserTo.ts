/**
 * @export
 * @class UserTo
 *
 * @swagger
 * components:
 *  schemas:
 *    UserTo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: id of user
 *          example: 1
 *        name:
 *          type: string
 *          description: name of user
 *          example: Erick
 *        email:
 *          type: string
 *          description: email of user
 *          example: some@gmail.com
 */
export class UserTo {
  id?: number;
  name?: string;
  email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }
}
