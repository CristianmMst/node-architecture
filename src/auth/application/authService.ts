import { User } from "../../user/domain/user";
import { hashPassword } from "../../shared/utils/hash";
import { UserRepository } from "../../user/domain/userRepository";

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  register = async (userData: User): Promise<void> => {
    const hashedPassword = await hashPassword(userData.password);
    const user = new User(userData.email, userData.username, hashedPassword);
    return this.userRepository.save(user);
  };

  login = ({ email, password }: any) => {
    // return this.userRepository.login(email, password);
  };
}
