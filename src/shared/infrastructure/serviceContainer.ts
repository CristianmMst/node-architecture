import { GetAllUsers } from "../../user/application/getAllUsers";
import { UserFindById } from "../../user/application/userFindById";
import { UserRegister } from "../../user/application/userRegister";
import { InMemoryUserRepository } from "../../user/infrastructure/database/InMemoryUserRepository";

const userRepository = new InMemoryUserRepository();

export const ServiceContainer = {
  user: {
    save: new UserRegister(userRepository),
    getAll: new GetAllUsers(userRepository),
    findById: new UserFindById(userRepository),
  },
};
