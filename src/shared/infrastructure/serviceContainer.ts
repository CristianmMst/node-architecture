import { UserFindById } from "../../user/application/userFindById";
import { UserRegister } from "../../user/application/userRegister";
import { MySqlUserRepository } from "../../user/infrastructure/MySqlUserRepository";

const userRepository = new MySqlUserRepository();

export const ServiceContainer = {
  user: {
    register: new UserRegister(userRepository),
    findById: new UserFindById(userRepository),
  },
};
