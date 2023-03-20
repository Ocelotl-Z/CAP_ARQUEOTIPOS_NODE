/**
 * @export
 * @class RoleTo
 *
 * @swagger
 * components:
 *  schemas:
 *    RoleTo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: id of role
 *          example: 1
 *        name:
 *          type: string
 *          description: name of role
 *          example: Admin
 */
export class RoleTo {
  id?: number;
  name?: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
