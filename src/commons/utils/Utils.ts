import { ParametersError } from "../../config/error";
import * as Kafka from "../../config/stream/kafka";
export const Utils = {
  required: (o: any) => {
    Object.keys(o).forEach((key) => {
      if (o[key] === null || o[key] === undefined) {
        throw new ParametersError(`El atributo ${key} es requerido`);
      }
    });
  },
  publish: (topic: string, message: Object) => {
    const msg: string = JSON.stringify(message);
    Kafka.send(topic, msg);
  },
};
