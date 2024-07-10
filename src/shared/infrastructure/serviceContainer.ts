import { UserFindById } from "../../user/application/userFindById";
import { UserRegister } from "../../user/application/userRegister";
import { InMemoryUserRepository } from "../../user/infrastructure/InMemoryUserRepository";

const userRepository = new InMemoryUserRepository();

export const ServiceContainer = {
  user: {
    register: new UserRegister(userRepository),
    findById: new UserFindById(userRepository),
  },
};
