import { AuthService } from "../../auth/application/authService";
import { GetAllUsers } from "../../user/application/getAllUsers";
import { UserFindById } from "../../user/application/userFindById";
import { InMemoryUserRepository } from "../../user/infrastructure/database/InMemoryUserRepository";

const userRepository = new InMemoryUserRepository();

export const ServiceContainer = {
  user: {
    getAll: new GetAllUsers(userRepository),
    findById: new UserFindById(userRepository),
  },
  authService: new AuthService(userRepository),
};
