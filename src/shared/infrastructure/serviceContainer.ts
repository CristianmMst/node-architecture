import { AuthService } from "../../auth/application/authService";
import { TokenService } from "../../auth/application/tokenService";
import { GetAllUsers } from "../../user/application/getAllUsers";
import { UserFindById } from "../../user/application/userFindById";
import { MySqlUserRepository } from "../../user/infrastructure/database/MySqlUserRepository";

const tokenService = new TokenService();
const userRepository = new MySqlUserRepository();

export const ServiceContainer = {
  user: {
    getAll: new GetAllUsers(userRepository),
    findById: new UserFindById(userRepository),
  },
  authService: new AuthService(tokenService, userRepository),
};
